import IsometricCube from './IsometricCube'
import './IsometricGrid.css'

export default function IsometricGrid({ cubes, cubeSize = 140, gap = 30, columns = 3 }) {
  return (
    <div
      className="isometricGrid"
      style={{
        '--cube-size': `${cubeSize}px`,
        '--grid-gap': `${gap}px`,
        gridTemplateColumns: `repeat(${columns}, ${cubeSize}px)`,
      }}
    >
      {cubes.map((cube, i) => (
        <IsometricCube
          key={cube.id ?? i}
          bgColor={cube.bgColor}
          logoUrl={cube.logoUrl}
          cubeSize={cubeSize}
          depth={cube.depth ?? 24}
        >
          {cube.children}
        </IsometricCube>
      ))}
    </div>
  )
}
