const UsaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 7410 3900"
    role="img"
    aria-label="USA"
  >
    <rect width="7410" height="3900" fill="#b22234" />
    {/* 13 stripes: white stripes */}
    {[...Array(6)].map((_, i) => (
      <rect
        key={i}
        y={650 + i * 650 * 2}
        width="7410"
        height="650"
        fill="#fff"
      />
    ))}
    {/* Blue canton */}
    <rect width="2964" height="2275" fill="#3c3b6e" />
    {/* Stars (simplified) */}
    <g fill="#fff" transform="translate(247 210) scale(1.5)">
      {[...Array(9)].map((_, row) =>
        [...Array(row % 2 === 0 ? 6 : 5)].map((__, col) => (
          <polygon
            key={`${row}-${col}`}
            points="10,0 13,7 20,7 14,12 16,19 10,15 4,19 6,12 0,7 7,7"
            transform={`translate(${col * 250}, ${row * 210})`}
          />
        ))
      )}
    </g>
  </svg>
);

export default UsaIcon;
