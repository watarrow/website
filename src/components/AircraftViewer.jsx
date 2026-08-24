import React, { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, STLLoader } from "three-stdlib";
import { Vector3 } from "three";

const MODEL_COLOR = "#967300";

const MIN_ZOOM = 0.55;
const MAX_ZOOM = 2.5;

// How long a model gets to load before the image takes over.
const MODEL_TIMEOUT_MS = 3000;

// z-axis up intead of y
const UP = new Vector3(0, 0, 1);

// default camera view
const LATITUDE = (18 * Math.PI) / 120;
const LONGITUDE = (-40 * Math.PI) / 220;
const DIRECTION = new Vector3(
  Math.cos(LATITUDE) * Math.cos(LONGITUDE),
  Math.cos(LATITUDE) * Math.sin(LONGITUDE),
  Math.sin(LATITUDE)
);

function Controls({ distance }) {
  const camera = useThree((state) => state.camera);
  const domElement = useThree((state) => state.gl.domElement);
  const invalidate = useThree((state) => state.invalidate);
  const controlsRef = useRef(null);

  useEffect(() => {
    const controls = new OrbitControls(camera, domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.6;
    controls.zoomSpeed = 0.6;

    // The canvas only renders on demand; damping keeps emitting `change` as it settles, so each event schedules the next frame.
    controls.addEventListener("change", invalidate);
    controlsRef.current = controls;

    return () => {
      controls.removeEventListener("change", invalidate);
      controls.dispose();
      controlsRef.current = null;
    };
  }, [camera, domElement, invalidate]);

  // Clamp the dolly once the model has been measured.
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls || !distance) return;

    controls.minDistance = distance * MIN_ZOOM;
    controls.maxDistance = distance * MAX_ZOOM;
    controls.update();
    invalidate();
  }, [distance, invalidate]);

  useFrame(() => controlsRef.current?.update());

  return null;
}

function Model({ url, yaw, onFit }) {
  const geometry = useLoader(STLLoader, url);
  const camera = useThree((state) => state.camera);
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    geometry.center();
    geometry.computeBoundingSphere();

    // Distance at which a sphere of this radius fills the frame.
    const radius = geometry.boundingSphere?.radius || 1;
    const halfFov = ((camera.fov / 2) * Math.PI) / 180;
    const distance = (radius / Math.sin(halfFov)) * 0.75;

    camera.up.copy(UP);
    camera.position.copy(DIRECTION).setLength(distance);
    camera.near = distance / 100;
    camera.far = distance * 20;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    onFit(distance);
    invalidate();
  }, [geometry, camera, onFit, invalidate]);

  return (
    <mesh geometry={geometry} rotation={[0, 0, (yaw * Math.PI) / 180]}>
      <meshStandardMaterial
        color={MODEL_COLOR}
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  );
}

// if a model fails to load; fall back to the image.
class ViewerErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError?.();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url && this.state.failed) {
      this.setState({ failed: false });
    }
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

const AircraftViewer = ({ url, image, yaw = 0, name }) => {
  const [distance, setDistance] = useState(0);
  const [timedOut, setTimedOut] = useState(false);
  const [failed, setFailed] = useState(false);
  const onFit = useCallback((fitted) => setDistance(fitted), []);
  const onError = useCallback(() => setFailed(true), []);

  const ready = Boolean(url) && distance > 0;

  // Start the clock only while a model is still pending; the cleanup cancels it the moment one frames itself.
  useEffect(() => {
    if (!url || ready) return;

    const timer = setTimeout(() => setTimedOut(true), MODEL_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [url, ready]);

  // The image is the whole slot when there is no model, and a rescue when one is
  // too slow or broken. Once it takes over it keeps the slotm, a model landing a
  const showImage = Boolean(image) && (!url || failed || timedOut);

  return (
    <div className={`aircraft-viewer${ready ? " ready" : ""}`}>
      {showImage && (
        <Image
          fill
          src={image}
          alt={`${name} aircraft`}
          className="aircraft-viewer-image"
          sizes="(max-width: 800px) 100vw, 50vw"
          draggable={false}
        />
      )}

      {url && !showImage && (
        <ViewerErrorBoundary url={url} onError={onError}>
          <Canvas
            className="aircraft-viewer-canvas"
            frameloop="demand"
            dpr={[1, 2]}
            camera={{ fov: 45, position: [0, 0, 10] }}
          >
            <ambientLight intensity={0.55} />
            <directionalLight position={[1, 1, 1.5]} intensity={0.9} />
            <directionalLight position={[-1, -0.5, 0.5]} intensity={0.35} />

            <Controls distance={distance} />

            <Suspense fallback={null}>
              <Model url={url} yaw={yaw} onFit={onFit} />
            </Suspense>
          </Canvas>
        </ViewerErrorBoundary>
      )}
    </div>
  );
};

export default AircraftViewer;
