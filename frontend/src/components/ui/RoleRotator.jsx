import { useEffect, useState } from 'react';

export default function RoleRotator({ roles, accent, font = 'inherit' }) {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setI(0);
    setVisible(true);
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(t);
  }, [roles]);

  return (
    <span style={{
      display: 'inline-block',
      color: accent,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity .35s, transform .35s',
      fontFamily: font,
    }}>
      {roles[i]}
    </span>
  );
}
