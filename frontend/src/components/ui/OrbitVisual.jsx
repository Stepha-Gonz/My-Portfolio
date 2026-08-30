export default function OrbitVisual() {
  return (
    <div style={{ position: 'absolute', right: '0%', top: '46%', transform: 'translateY(-50%)', width: 'min(46vw,620px)', height: 'min(46vw,620px)', zIndex: 1, pointerEvents: 'none' }}>
      <div className="aura" style={{ inset: '16%', background: 'radial-gradient(circle,var(--aura-a),transparent 68%)', filter: 'blur(70px)' }} />
      <div className="aura" style={{ left: '42%', top: '34%', width: '34%', height: '34%', background: 'radial-gradient(circle,var(--aura-b),transparent 70%)', filter: 'blur(50px)' }} />
      <div className="orbit" style={{ width: '100%', height: '100%' }} />
      <div className="orbit" style={{ width: '70%', height: '70%', borderColor: 'color-mix(in oklch,var(--violet) 45%,transparent)' }} />
      <div className="orbit" style={{ width: '40%', height: '40%', borderColor: 'color-mix(in oklch,var(--lime) 55%,transparent)' }} />
      <div style={{ position: 'absolute', left: '50%', top: '50%', width: '100%', height: '100%', transform: 'translate(-50%,-50%)', animation: 'spin 34s linear infinite' }}>
        <div style={{ position: 'absolute', left: '50%', top: 0, width: 9, height: 9, marginLeft: -4, borderRadius: '50%', background: 'var(--lime)', boxShadow: '0 0 18px var(--lime)' }} />
        <div style={{ position: 'absolute', left: 0, top: '50%', width: 7, height: 7, marginTop: -3, borderRadius: '50%', background: 'var(--coral)', boxShadow: '0 0 16px var(--coral)' }} />
      </div>
      <div className="mono" style={{ position: 'absolute', right: '6%', bottom: '12%', fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '.22em' }}>DATA / DESIGN / DEV</div>
    </div>
  );
}
