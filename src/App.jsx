import './App.css'

const cards = [
  // Fila 1
  { id: 1,  w: 190, h: 220, x: 40,  y: 40,  color: '#c026d3' },
  { id: 2,  w: 180, h: 210, x: 270, y: 40,  color: '#7c3aed' },
  { id: 3,  w: 195, h: 230, x: 500, y: 40,  color: '#0891b2' },
  { id: 4,  w: 185, h: 215, x: 735, y: 40,  color: '#ea580c' },
  // Fila 2
  { id: 5,  w: 185, h: 225, x: 40,  y: 295, color: '#4f46e5' },
  { id: 6,  w: 195, h: 215, x: 270, y: 295, color: '#e11d48' },
  { id: 7,  w: 180, h: 235, x: 500, y: 295, color: '#9333ea' },
  { id: 8,  w: 190, h: 220, x: 735, y: 295, color: '#0d9488' },
  // Fila 3
  { id: 9,  w: 200, h: 230, x: 40,  y: 560, color: '#db2777' },
  { id: 10, w: 185, h: 220, x: 270, y: 560, color: '#2563eb' },
  { id: 11, w: 190, h: 240, x: 500, y: 560, color: '#f59e0b' },
  { id: 12, w: 180, h: 225, x: 735, y: 560, color: '#10b981' },
  // Fila 4
  { id: 13, w: 195, h: 215, x: 40,  y: 830, color: '#6366f1' },
  { id: 14, w: 190, h: 235, x: 270, y: 830, color: '#f43f5e' },
  { id: 15, w: 185, h: 220, x: 500, y: 830, color: '#8b5cf6' },
  { id: 16, w: 200, h: 230, x: 735, y: 830, color: '#14b8a6' },
  // Fila 5
  { id: 17, w: 180, h: 225, x: 40,  y: 1095, color: '#ec4899' },
  { id: 18, w: 195, h: 215, x: 270, y: 1095, color: '#3b82f6' },
  { id: 19, w: 185, h: 230, x: 500, y: 1095, color: '#22c55e' },
  { id: 20, w: 190, h: 220, x: 735, y: 1095, color: '#f97316' },
  // Fila 6
  { id: 21, w: 190, h: 235, x: 40,  y: 1360, color: '#a855f7' },
  { id: 22, w: 185, h: 220, x: 270, y: 1360, color: '#06b6d4' },
  { id: 23, w: 200, h: 225, x: 500, y: 1360, color: '#e11d48' },
  { id: 24, w: 180, h: 215, x: 735, y: 1360, color: '#84cc16' },
]

function App() {
  return (
    <section className="hero">
      <div className="collage-plane">
        {cards.map((card) => (
          <div
            key={card.id}
            className="collage-card"
            style={{
              width: card.w,
              height: card.h,
              left: card.x,
              top: card.y,
              backgroundColor: card.color,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default App
