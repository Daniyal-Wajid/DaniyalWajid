'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Lightweight swipe-carousel helper. Attach `containerRef` to the
 * scrollable flex container; each direct child is treated as a slide.
 * Uses native scroll + scroll-snap (set up in CSS) for the actual swipe
 * gesture, so there's no touch/gesture JS at all - just index tracking
 * for the dot indicators.
 */
export function useSwipeIndex(itemCount) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let raf;

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(el.children);
        if (!children.length) return;
        const containerCenter = el.scrollLeft + el.clientWidth / 2;
        let closest = 0;
        let closestDist = Infinity;
        children.forEach((child, i) => {
          const dist = Math.abs((child.offsetLeft + child.offsetWidth / 2) - containerCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      el.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [itemCount]);

  const scrollToIndex = useCallback((index) => {
    const el = containerRef.current;
    if (!el) return;
    const child = el.children[index];
    if (child) {
      el.scrollTo({
        left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2,
        behavior: 'smooth',
      });
    }
  }, []);

  return { containerRef, activeIndex, scrollToIndex };
}
