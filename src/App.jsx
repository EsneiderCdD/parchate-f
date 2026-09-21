import './App.css'
import IsometricGrid from './components/specific/IsometricCube/IsometricGrid'

const testCubes = [
  { id: 1,  bgColor: '#2563eb' },
  { id: 2,  bgColor: '#16a34a' },
  { id: 3,  bgColor: '#9333ea' },
  { id: 4,  bgColor: '#dc2626' },
  { id: 5,  bgColor: '#0891b2' },
  { id: 6,  bgColor: '#1e1e1e' },
  { id: 7,  bgColor: '#f59e0b' },
  { id: 8,  bgColor: '#ec4899' },
  { id: 9,  bgColor: '#0d9488' },
  { id: 10, bgColor: '#7c3aed' },
  { id: 11, bgColor: '#ea580c' },
  { id: 12, bgColor: '#2563eb' },
  { id: 13, bgColor: '#16a34a' },
  { id: 14, bgColor: '#9333ea' },
  { id: 15, bgColor: '#dc2626' },
  { id: 16, bgColor: '#0891b2' },
  { id: 17, bgColor: '#1e1e1e' },
  { id: 18, bgColor: '#f59e0b' },
]

function App() {
  return (
    <section className="hero">
      <div className="layout">
        <div className="grid-container">
          <IsometricGrid cubes={testCubes} cubeSize={325} gap={0} columns={6} />
        </div>
      </div>
    </section>
  )
}

export default App
