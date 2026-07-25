'use client';

import React from 'react';

const SwipeDots = ({ count, activeIndex, onDotClick }) => {
  if (!count || count <= 1) return null;
  return (
    <div className="swipe-dots">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          className={`swipe-dot ${i === activeIndex ? 'active' : ''}`}
          onClick={() => onDotClick(i)}
          aria-label={`Go to item ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default SwipeDots;
