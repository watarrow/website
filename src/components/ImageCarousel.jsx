import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { assetUrl, fileIds } from "@/lib/aircraft";

const LOOP_COPIES = 3;
const SETTLE_MS = 140; // How long the strip must be still before it re-centres.

const EPSILON = 1;

const ChevronLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="image-carousel-arrow-icon"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="image-carousel-arrow-icon"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ImageCarousel = ({
  images,
  width,
  height,
  gap = 0,
  progress,
  arrows = false,
  loop = false,
  alt = "",
  className = "",
}) => {
  const trackRef = useRef(null);
  const settleRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);


  const [overflows, setOverflows] = useState(false);

  const scrollLinked = typeof progress === "number";

  const ids = fileIds(images);

  // A set that fits has nowhere to wrap to, one slide has nothing to wrap with,
  // and a scroll-linked strip does not scroll.
  const looping = loop && !scrollLinked && overflows && ids.length > 1;
  const slides = looping
    ? Array.from({ length: LOOP_COPIES }, () => ids).flat()
    : ids;


  const measure = useCallback(() => {
    const track = trackRef.current;
    const kids = track?.children;
    if (!track || !kids?.length) return null;

    const first = kids[0];
    const last = kids[Math.min(ids.length, kids.length) - 1];

    return {
      copy: last.offsetLeft + last.offsetWidth - first.offsetLeft,
      view: track.clientWidth,
    };
  }, [ids.length]);

  const recentre = useCallback(() => {
    const track = trackRef.current;
    const box = measure();
    if (!track || !box?.copy) return;


    const span = box.copy + gap;

    if (track.scrollLeft < span * 0.5) track.scrollLeft += span;
    else if (track.scrollLeft >= span * 1.5) track.scrollLeft -= span;
  }, [measure, gap]);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    if (looping) {
      clearTimeout(settleRef.current);
      settleRef.current = setTimeout(recentre, SETTLE_MS);
      return;
    }

    const max = track.scrollWidth - track.clientWidth;

    setAtStart(track.scrollLeft <= EPSILON);
    setAtEnd(track.scrollLeft >= max - EPSILON);
  }, [looping, recentre]);

  useEffect(() => {
    if (scrollLinked) return;

    const remeasure = () => {
      const box = measure();
      if (box) setOverflows(box.copy > box.view + EPSILON);
      return box;
    };

    const box = remeasure();
    const track = trackRef.current;
    if (looping && track && box) track.scrollLeft = box.copy + gap;
    else sync();

    const onResize = () => {
      remeasure();
      if (looping) recentre();
      else sync();
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(settleRef.current);
    };
  }, [scrollLinked, looping, measure, recentre, sync, gap, width, height]);

  const step = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    if (looping) recentre();

    const [first, second] = track.children;
    const pitch =
      first && second ? second.offsetLeft - first.offsetLeft : track.clientWidth;

    track.scrollBy({ left: direction * pitch, behavior: "smooth" });
  };


  const px = (value) => (Number.isFinite(value) ? value : undefined);


  const hintWidth = Math.max(1, Math.round(width || 600));
  const hintHeight = Math.max(1, Math.round(height || 900));

  const offset = progress * (ids.length - 1) * (width + gap);

  if (ids.length === 0) return null;

  return (
    <div className={`image-carousel${className ? ` ${className}` : ""}`}>
      <ul
        ref={trackRef}
        className={[
          "image-carousel-track",
          scrollLinked && "scroll-linked",
          !scrollLinked && !overflows && "centered",
        ]
          .filter(Boolean)
          .join(" ")}
        onScroll={scrollLinked ? undefined : sync}
        style={{
          gap,
          ...(scrollLinked && {
            width: px(width),
            ...(Number.isFinite(offset) && {
              transform: `translateX(-${offset}px)`,
            }),
          }),
        }}
      >
        {slides.map((id, i) => {
          const position = i % ids.length;
          // Only the middle copy is the real one; the rest are scroll runway
          // and would otherwise read out three times over.
          const clone = looping && i !== ids.length + position;

          return (
            <li
              className="image-carousel-slide"
              style={{ width: px(width), height: px(height) }}
              key={`${id}-${i}`}
              aria-hidden={clone || undefined}
            >
              <Image
                src={assetUrl(id)}
                alt={
                  clone || !alt ? "" : `${alt} ${position + 1} of ${ids.length}`
                }
                width={hintWidth}
                height={hintHeight}
                sizes={`${hintWidth}px`}
                className="image-carousel-image"
                draggable={false}
              />
            </li>
          );
        })}
      </ul>

      {arrows && !scrollLinked && overflows && (
        <>
          <button
            type="button"
            className="image-carousel-arrow prev"
            onClick={() => step(-1)}
            disabled={!looping && atStart}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="image-carousel-arrow next"
            onClick={() => step(1)}
            disabled={!looping && atEnd}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
