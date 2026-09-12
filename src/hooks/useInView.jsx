import { useEffect, useRef, useState } from "react";

/**
 * Fires once, the first time the element scrolls near the viewport. Used to
 * defer mounting the 3D viewers so a page of planes doesn't download every
 * model at once.
 *
 * @param rootMargin how far ahead of the viewport to trigger
 * @returns {[React.RefObject, boolean]}
 */
export default function useInView(rootMargin = "300px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    // Without IntersectionObserver, just render everything.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, inView]);

  return [ref, inView];
}
