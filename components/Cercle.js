export default function Cercle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="399.487"
      height="402.882"
      viewBox="0 0 399.487 402.882"
    >
      <filter id="f1" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
      </filter>
      <linearGradient
        id="linear-gradient"
        x1="-0.78"
        y1="-0.533"
        x2="0.532"
        y2="1.61"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stopColor="#4f22f2" />
        <stop offset="1" stopColor="#00f7c7" />
      </linearGradient>
      <ellipse
        id="타원_63"
        data-name="타원 63"
        cx="116.984"
        cy="119.541"
        rx="116.984"
        ry="119.541"
        transform="translate(52.92 121.326) rotate(-17)"
        opacity="0.639"
        fill="url(#linear-gradient)"
        filter="url(#f1)"
        style={{ mixBlendMode: "hard-light", isolation: "isolate" }}
      />
    </svg>
  );
}
