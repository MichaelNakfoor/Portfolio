import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function RouteScroll() {
  const { key, pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map<string, { x: number; y: number }>());
  const previousPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const savedPositions = positions.current;
    const pathChanged = previousPath.current !== pathname;
    previousPath.current = pathname;
    const saved = navigationType === "POP" ? savedPositions.get(key) : undefined;
    let frame = 0;
    let attempts = 0;
    let targetId = hash.slice(1);
    try {
      targetId = decodeURIComponent(targetId);
    } catch {
      // A malformed escape can still be a literal element ID.
    }

    const restore = () => {
      if (saved) {
        window.scrollTo({ left: saved.x, top: saved.y, behavior: "instant" });
        if (Math.abs(window.scrollY - saved.y) < 1) return;
      } else if (hash) {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "instant", block: "start" });
          return;
        }
      } else {
        if (pathChanged) window.scrollTo({ left: 0, top: 0, behavior: "instant" });
        return;
      }
      // Allow deferred content to mount, without leaving a permanent observer.
      if (++attempts < 120) frame = requestAnimationFrame(restore);
    };

    restore();
    const cancelRestore = () => cancelAnimationFrame(frame);
    window.addEventListener("wheel", cancelRestore, { passive: true });
    window.addEventListener("touchstart", cancelRestore, { passive: true });
    window.addEventListener("keydown", cancelRestore);
    return () => {
      cancelRestore();
      window.removeEventListener("wheel", cancelRestore);
      window.removeEventListener("touchstart", cancelRestore);
      window.removeEventListener("keydown", cancelRestore);
      savedPositions.set(key, { x: window.scrollX, y: window.scrollY });
    };
  }, [key, pathname, hash, navigationType]);

  return null;
}
