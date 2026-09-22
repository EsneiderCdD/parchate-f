import './UpcomingSchedule.css'

const upcomingEvents = [
  { id: 1,  time: '14:00', creator: 'TodoCode', topic: 'React desde cero', bgColor: '#2563eb' },
  { id: 2,  time: '15:00', creator: 'midudev', topic: 'Repasando JavaScript', bgColor: '#16a34a' },
  { id: 3,  time: '16:00', creator: 'Fazt', topic: 'Construyendo una API REST', bgColor: '#9333ea' },
  { id: 4,  time: '17:00', creator: 'MoureDev', topic: 'Kotlin vs Swift', bgColor: '#dc2626' },
  { id: 5,  time: '18:00', creator: 'Dalto', topic: 'CSS moderno en 2026', bgColor: '#ea580c' },
  { id: 6,  time: '19:00', creator: 'S4vitar', topic: 'Hacking ético', bgColor: '#0891b2' },
  { id: 7,  time: '20:00', creator: 'Platzi', topic: 'Live de Inteligencia Artificial', bgColor: '#0d9488' },
  { id: 8,  time: '21:00', creator: 'Bluuweb', topic: 'Vue y Nuxt', bgColor: '#7c3aed' },
  { id: 9,  time: '22:00', creator: 'MoureDev', topic: 'Reto de programación', bgColor: '#f59e0b' },
  { id: 10, time: '23:00', creator: 'midulive', topic: 'TypeScript avanzado', bgColor: '#ec4899' },
  { id: 11, time: '00:00', creator: 'Coderhouse', topic: 'Diseño UX/UI', bgColor: '#10b981' },
  { id: 12, time: '01:00', creator: 'DotCSV', topic: 'Machine Learning', bgColor: '#f43f5e' },
  { id: 13, time: '02:00', creator: 'Goncy', topic: 'Frontend en vivo', bgColor: '#6366f1' },
  { id: 14, time: '03:00', creator: 'MoureDev', topic: 'Repaso de Git', bgColor: '#84cc16' },
  { id: 15, time: '04:00', creator: 'FaztCode', topic: 'Docker en producción', bgColor: '#06b6d4' },
  { id: 16, time: '05:00', creator: 'TodoCode', topic: 'Node.js + MongoDB', bgColor: '#a855f7' },
  { id: 17, time: '06:00', creator: 'Dalto', topic: 'Python para todos', bgColor: '#f97316' },
  { id: 18, time: '07:00', creator: 'S4vitar', topic: 'OSINT', bgColor: '#3b82f6' },
]

export default function UpcomingSchedule() {
  return (
    <section className="upcoming-section">
      <div className="upcoming-layout">
        <div className="upcoming-intro">
          <h2 className="upcoming-heading">Próximamente</h2>
          <p className="upcoming-description">
            Descubre quién transmite en las próximas horas y no te pierdas nada.
          </p>
        </div>

        <div className="upcoming-grid">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="upcoming-card"
              style={{ backgroundColor: event.bgColor }}
            >
              <span className="upcoming-time">{event.time}</span>
              <span className="upcoming-creator">{event.creator}</span>
              <p className="upcoming-topic">{event.topic}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
