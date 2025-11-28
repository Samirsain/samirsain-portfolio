"use client";

export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontSize="120"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        SS
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-size="120" font-weight="700" font-family="system-ui, -apple-system, sans-serif">SS</text></svg>`;
}
