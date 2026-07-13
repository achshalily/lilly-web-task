// A simple line-and-wash style lily illustration, built from layered petal
// shapes. Used as a decorative accent on page headers.
function Lily({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* soft background wash behind the flower */}
      <circle cx="110" cy="110" r="95" fill="var(--sage)" opacity="0.18" />

      {/* stem and leaf */}
      <path d="M112 210 C 108 160, 116 130, 110 100" stroke="var(--sage-dark)" strokeWidth="3" fill="none" />
      <path d="M110 150 C 90 150, 78 138, 72 118 C 96 118, 110 130, 110 150 Z" fill="var(--sage)" />

      {/* five overlapping petals, rotated around the centre */}
      {[0, 72, 144, 216, 288].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 110 100)`}>
          <path
            d="M110 100 C 100 70, 100 35, 110 15 C 120 35, 120 70, 110 100 Z"
            fill="var(--rose)"
            stroke="var(--rose-deep)"
            strokeWidth="1.5"
          />
        </g>
      ))}

      {/* petal freckles */}
      <circle cx="106" cy="55" r="1.6" fill="var(--wine)" />
      <circle cx="112" cy="62" r="1.6" fill="var(--wine)" />
      <circle cx="108" cy="70" r="1.6" fill="var(--wine)" />

      {/* centre + stamens */}
      <circle cx="110" cy="100" r="6" fill="var(--gold)" />
      <path d="M110 100 L98 82 M110 100 L122 82 M110 100 L110 78" stroke="var(--wine)" strokeWidth="1.5" />
    </svg>
  )
}

export default Lily
