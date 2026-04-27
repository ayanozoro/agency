"use client";

import React from "react";

interface GaugeProps {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
}

export default function Gauge({
  value,
  color = "#0f6e56",
  showLabels = false,
  min = "0",
  max = "100",
}: GaugeProps) {
  // SVG coordinates
  const cx = 100;
  const cy = 100;
  const r = 80;
  const strokeWidth = 2.5;

  const totalTicks = 40;
  // Calculate how many ticks should be colored based on the percentage
  const activeCount = Math.round((value / 100) * totalTicks);

  const renderTicks = () => {
    const ticks = [];
    // Arc goes from π to 2π (180 degrees to 360 degrees)
    for (let i = 0; i < totalTicks; i++) {
      // Fraction of the arc from 0 to 1
      const fraction = i / (totalTicks - 1);
      // Angle goes from 180 (π) to 360 (2π)
      const angle = Math.PI + fraction * Math.PI;

      const innerR = r - 10;
      const outerR = r;

      const x1 = cx + innerR * Math.cos(angle);
      const y1 = cy + innerR * Math.sin(angle);
      const x2 = cx + outerR * Math.cos(angle);
      const y2 = cy + outerR * Math.sin(angle);

      const isActive = i < activeCount;

      ticks.push(
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={isActive ? color : "#d4d4d8"}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      );
    }
    return ticks;
  };

  return (
    <div className="w-full max-w-[260px] mx-auto flex flex-col items-center">
      <div className="relative w-full aspect-[200/120]">
        <svg viewBox="0 0 200 120" className="w-full h-full overflow-visible">
          {renderTicks()}
          <text
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            fontSize="22"
            fontWeight="600"
            fill="#171717"
          >
            {value}%
          </text>
        </svg>
      </div>
      {showLabels && (
        <div className="w-full flex justify-between px-2 text-[11px] text-neutral-500 font-medium -mt-2">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
