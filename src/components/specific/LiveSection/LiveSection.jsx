import './LiveSection.css'
import todocode from '../../../assets/backgrounds/todocode.jpg'

export default function LiveSection() {
  return (
    <section className="live-section">
      <div className="live-wrapper">
        <div className="live-background">
          <img src={todocode} alt="" />
          <div className="live-overlay" />
        </div>

        <div className="live-content">
          <div className="live-card">
            <div className="live-media">
              <img src={todocode} alt="Stream en vivo" />
            </div>

            <div className="live-info">
              <span className="live-badge">EN DIRECTO</span>
              <h3 className="live-creator">TodoCode</h3>
              <p className="live-title">Pair Programming: Construyendo una API REST desde cero</p>
              <button className="live-cta">Ir al directo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
