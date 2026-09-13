import React from "react";

const events = [
  ['Spring', 'Temple open day', 'A seasonal day for visitors to walk the grounds and spend a little longer.'],
  ['Summer', 'Evening bell', 'A quiet summer gathering around dusk.'],
  ['Autumn', 'Autumn reflection', 'A seasonal programme of walking, reading and contemplation.'],
]

export default function Calendar() {
  return <>
    <section className="page-hero simple-hero"><div><p className="eyebrow">Calendar</p><h1>Time moves<br /><em>through seasons.</em></h1><p>Upcoming events will live here once the temple calendar is connected.</p></div></section>
    <section className="page-section calendar-list">
      {events.map(([season, title, text]) => <article className="event-row" key={season}><span className="season">{season}</span><div><h2>{title}</h2><p>{text}</p></div><span className="event-date">Coming soon</span></article>)}
    </section>
  </>
}
