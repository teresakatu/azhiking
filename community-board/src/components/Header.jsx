function Header() {
  return (
    <header className="hero-band">
      <svg
        className="hero-illustration"
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMax slice"
        role="img"
        aria-label="Illustration of saguaro cacti and mesas at sunset"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F6C667" />
            <stop offset="55%" stopColor="#E38B4B" />
            <stop offset="100%" stopColor="#B5502D" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF3D6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFF3D6" stopOpacity="0" />
          </radialGradient>

          <symbol id="saguaro" viewBox="0 0 44 100">
            <rect x="17" y="8" width="10" height="88" rx="5" />
            <rect x="2" y="34" width="8" height="40" rx="4" />
            <rect x="4" y="50" width="16" height="8" rx="4" />
            <rect x="34" y="18" width="8" height="34" rx="4" />
            <rect x="24" y="34" width="16" height="8" rx="4" />
          </symbol>

          <symbol id="barrel" viewBox="0 0 40 34">
            <ellipse cx="20" cy="20" rx="19" ry="14" />
            <circle cx="20" cy="6" r="3.2" fill="#C9932A" />
          </symbol>

          <symbol id="agave" viewBox="0 0 60 46">
            <g>
              <path d="M30,46 C22,30 14,18 4,6 C16,12 24,24 30,38 Z" />
              <path d="M30,46 C26,26 24,12 22,0 C28,10 31,26 32,42 Z" />
              <path d="M30,46 C32,26 34,12 38,0 C40,12 37,26 34,42 Z" />
              <path d="M30,46 C38,30 46,18 56,6 C44,12 36,24 30,38 Z" />
            </g>
          </symbol>
        </defs>

        <rect x="0" y="0" width="1200" height="320" fill="url(#skyGrad)" />
        <circle cx="880" cy="95" r="120" fill="url(#sunGlow)" />
        <circle cx="880" cy="95" r="52" fill="#FFF3D6" />

        <path
          d="M110,55 q8,-10 16,0 q8,-10 16,0"
          stroke="#FFF3D6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M240,38 q6,-8 12,0 q6,-8 12,0"
          stroke="#FFF3D6"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M370,72 q6,-8 12,0 q6,-8 12,0"
          stroke="#FFF3D6"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.45"
        />

        <path
          d="M0,245 L80,195 L160,235 L260,175 L360,225 L460,185 L560,230 L660,195 L760,235 L860,200 L960,230 L1060,190 L1160,225 L1200,205 L1200,320 L0,320 Z"
          fill="#C9932A"
          opacity="0.55"
        />

        <path
          d="M0,300 L60,300 L60,262 L140,262 L140,300 L260,300 L260,232 L300,232 L300,210 L360,210 L360,232 L400,232 L400,300 L560,300 L560,252 L640,252 L640,300 L780,300 L780,222 L830,222 L830,200 L890,200 L890,222 L940,222 L940,300 L1200,300 L1200,320 L0,320 Z"
          fill="#2F4A45"
        />

        <rect x="0" y="295" width="1200" height="25" fill="#263129" />

        <g fill="#263129">
          <use href="#saguaro" x="40" y="195" width="44" height="100" />
          <use href="#barrel" x="140" y="261" width="44" height="34" />
          <use href="#saguaro" x="225" y="165" width="44" height="130" />
          <use href="#agave" x="330" y="249" width="60" height="46" />
          <use href="#saguaro" x="460" y="215" width="44" height="80" />
          <use href="#barrel" x="560" y="265" width="38" height="30" />
          <use href="#saguaro" x="650" y="185" width="44" height="110" />
          <use href="#saguaro" x="800" y="225" width="36" height="70" />
          <use href="#agave" x="870" y="250" width="60" height="45" />
          <use href="#saguaro" x="985" y="155" width="44" height="140" />
          <use href="#barrel" x="1090" y="263" width="40" height="32" />
          <use href="#saguaro" x="1150" y="205" width="40" height="90" />
        </g>
      </svg>

      <div className="hero-text">
        <p className="hero-eyebrow">A hiking board for Arizona, rim to rim</p>
        <h1 className="hero-title">Arizona Trailhead Collective</h1>
      </div>
    </header>
  );
}

export default Header;
