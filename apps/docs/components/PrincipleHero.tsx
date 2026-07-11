import type { ReactNode } from 'react';

export function PrincipleHero({
  number,
  title,
  description,
  illustration,
}: {
  number: string;
  title: string;
  description: ReactNode;
  illustration: ReactNode;
}) {
  return (
    <header className="principle-hero">
      <div>
        <p className="principle-hero-eyebrow">Principle {number} of 6</p>
        <h1 className="principle-hero-title">{title}</h1>
        <p className="principle-hero-desc">{description}</p>
      </div>
      <div className="principle-hero-illustration" aria-hidden="true">
        {illustration}
      </div>
    </header>
  );
}