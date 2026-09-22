import './LiveSection.css'
import mayarainer from '../../../assets/backgrounds/mayarainer.png'

export default function LiveSection() {
  return (
    <section className="live-section">
      <div className="live-frame-outer">
        <div className="live-frame">
          <span className="frame-dot tl" />
          <span className="frame-dot tr" />
          <span className="frame-dot bl" />
          <span className="frame-dot br" />

          <div className="live-background">
            <img src={mayarainer} alt="" />
            <div className="live-overlay" />
          </div>

          <div className="live-wrapper">
            <div className="live-content">
              <img className="live-content-bg" src={mayarainer} alt="" />

              <div className="live-info">
                <span className="live-badge">EN DIRECTO</span>
                <h3 className="live-creator">TodoCode</h3>
                <p className="live-title">Pair Programming: Construyendo una API REST desde cero</p>
                <button className="live-cta">Ir al directo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
