"use client";
import { useState } from 'react';
import Link from 'next/link';
import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import './work.css';

export default function Work() {
  const [channel, setChannel] = useState(false);
  const [selected, setSelected] = useState(false);
  return <><TopNav /><main className="container work-page">
    <p className="hero-eyebrow">Product Design System / Examples</p>
    <h1>Decisions that shape<br />the whole product.</h1>
    <p className="work-lede">A design system is a way to make product judgment repeatable. These two fictional contexts show how different user problems lead to different interaction rules.</p>
    <p className="work-disclosure">Interactive design studies · Fictional data</p>
    <section className="work-case">
      <div><p className="hero-eyebrow">01 / Messaging workspace</p><h2>Help people find<br />the next useful action.</h2><p>Communication tools grow across inboxes, contacts, broadcasts and automation. The design challenge is keeping the current task clear as the product grows.</p><h3>The design response</h3><p>Separate navigation scope, reveal information at the right moment, and give first-use, empty and failed states their own explanation and recovery action.</p><p><strong>Evidence:</strong> design handbook and reusable navigation / Inbox primitives. This case study does not claim a full production migration.</p></div>
      <div className="work-specimen chat-specimen"><p className="spec-label">INTERACTION STUDY / CHANNEL STATE</p><div className="spec-bar">Workspace <span>Inbox</span></div><div className="spec-body"><span className="spec-status">{channel ? 'Connected · Example state' : 'Setup needed · Example state'}</span><h3>{channel ? 'Ready for your first conversation.' : 'Connect a channel to get started.'}</h3><p>{channel ? 'An empty inbox is a valid state. Explain what happens next, without implying a connection failure.' : 'Before showing message filters, help the user complete the step that makes the inbox useful.'}</p><button onClick={() => setChannel(!channel)}>{channel ? 'Reset example' : 'Simulate connection'}</button></div><p className="spec-foot">Demo only. No channel is connected.</p></div>
    </section>
    <section className="work-case">
      <div><p className="hero-eyebrow">02 / Offer builder</p><h2>Make a modular offer<br />easy to reason about.</h2><p>Setup effort, recurring service and optional skills answer different questions. The interface needs to keep those distinctions visible while someone builds an offer.</p><h3>The design response</h3><p>Use clear stage hierarchy, selectable skill rows and a persistent summary. Show what is included and what the user is adding before asking for commitment.</p><p><strong>Example:</strong> a fictional configurator showing the selection and review pattern.</p></div>
      <div className="work-specimen offer-specimen"><p className="spec-label">INTERACTION STUDY / OFFER COMPOSITION</p><div className="spec-bar">Offer builder <span>Build your workflow</span></div><div className="spec-body"><span className="spec-status">Illustrative package</span><h3>Start with the workflow.</h3><p>Core setup <strong>Included</strong></p><button className="skill-toggle" aria-pressed={selected} onClick={() => setSelected(!selected)}>{selected ? '✓ Added' : '+ Add'} · Follow-up skill</button><div className="spec-summary"><small>YOUR SELECTION</small><p>Core setup{selected ? ' + Follow-up skill' : ''}</p><span>Setup, recurring and usage charges should be reviewed separately.</span></div></div><p className="spec-foot">Interaction example. No commercial pricing or quote submission.</p></div>
    </section>
    <section className="work-method"><p className="hero-eyebrow">The bridge to execution</p><h2>From a rule to something you can inspect.</h2><p className="work-flow">User task → Design decision → Tokens & components → Interactive specimen → Review</p><p>The system turns product and design direction into reusable rules, supported by AI-assisted implementation. The useful output is a clear contract: what the user needs, how the interface responds, and what the implementation still needs to prove.</p><Link href="/foundations">Explore the foundations →</Link>{' · '}<a href="https://github.com/kennylimkamho/design-system/tree/main/content/case-studies">Read the case study notes ↗</a></section>
  </main><Footer /></>;
}
