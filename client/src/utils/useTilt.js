'use client';

import { useEffect, useRef } from 'react';

/**
 * Lightweight, dependency-free 3D tilt-on-hover effect.
 * Attach the returned ref to any element; it will subtly rotate
 * in 3D space following the cursor, and reset smoothly on mouse leave.
 * No-op on touch devices (no mousemove events), so it costs nothing there.
 */
export function useTilt(maxTilt = 8, lift = 6) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-${lift}px)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, lift]);

  return ref;
}
