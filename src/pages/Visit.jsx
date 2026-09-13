import React from "react";
import SectionHeading from '../components/SectionHeading'

export default function Visit() {
  return <>
    <section className="page-hero">
      <div><p className="eyebrow">Visit</p><h1>Take the path<br /><em>slowly.</em></h1><p>Practical information for planning your visit to Dainichi-ji in Tokushima.</p></div>
      <div className="page-hero-image gate-image" />
    </section>
    <section className="page-section info-layout">
      <SectionHeading eyebrow="Visitor guide" title="A simple visit" text="Replace these sample details with the temple's confirmed visitor information when the site is ready to launch." />
      <div className="info-grid">
        <Info title="Opening hours" text="8:00 — 17:00" note="Sample content · confirm before launch" />
        <Info title="Location" text="Tokushima, Japan" note="Add the confirmed address and map here." />
        <Info title="Etiquette" text="Quiet voices · respectful dress" note="A short illustrated guide can be added here." />
      </div>
    </section>
    <section className="image-wide garden-image" />
  </>
}

function Info({ title, text, note }) {
  return <article className="info-card"><span className="eyebrow">{title}</span><h3>{text}</h3><p>{note}</p></article>
}
