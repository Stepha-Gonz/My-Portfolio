export default function SectionHead({ eyebrow, children, blurb, align = 'split' }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: align === 'split' ? '1.35fr 1fr' : '1fr', gap: 50, alignItems: 'end', marginBottom: 56 }} className="g2">
      <div>
        <div className="eyebrow" style={{ marginBottom: 18 }}>{eyebrow}</div>
        <h2 className="disp" style={{ fontSize: 'clamp(38px,5vw,68px)', margin: 0 }}>{children}</h2>
      </div>
      {blurb && <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 400 }}>{blurb}</p>}
    </div>
  );
}
