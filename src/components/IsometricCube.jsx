import './IsometricCube.css'

function darkenColor(hex, amount = 30) {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, (num >> 16) - amount)
  const g = Math.max(0, ((num >> 8) & 0x00ff) - amount)
  const b = Math.max(0, (num & 0x0000ff) - amount)
  return `rgb(${r}, ${g}, ${b})`
}

export default function IsometricCube({ bgColor = '#5b21b6', logoUrl, children, cubeSize = 140, depth = 24 }) {
  const frontColor = darkenColor(bgColor, 30)
  const rightColor = darkenColor(bgColor, 55)

  return (
    <div
      className="isometricCube"
      style={{
        '--cube-size': `${cubeSize}px`,
        '--cube-depth': `${depth}px`,
      }}
    >
      <div className="shadow" />

      <div className="faceFront" style={{ background: frontColor }} />
      <div className="faceRight" style={{ background: rightColor }} />

      <div className="topFace" style={{ background: bgColor }}>
        <div className="bevel">
          <span className="cornerDot tl" />
          <span className="cornerDot tr" />
          <span className="cornerDot bl" />
          <span className="cornerDot br" />
        </div>

        <div className="logoArea">
          {logoUrl ? <img src={logoUrl} alt="" /> : children}
        </div>
      </div>
    </div>
  )
}
