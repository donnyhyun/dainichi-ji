import SectionHeading from '../components/SectionHeading'

export default function About() {
  return <>
    <section className="page-hero"><div><p className="eyebrow">About Dainichi-ji</p><h1>A living place,<br /><em>not a museum.</em></h1><p>This page is ready for the temple's history, lineage, architecture and stories.</p></div><div className="page-hero-image hall-image" /></section>
    <section className="page-section about-copy">
      <SectionHeading eyebrow="The story" title="A history worth telling slowly" />
      <div className="prose"><p>Dainichi-ji can be introduced through the people, buildings, rituals and landscape that have shaped the temple over time. Rather than presenting everything at once, the final site can reveal its history in small chapters.</p><p>This starter site keeps the wording intentionally neutral so the temple's official history and preferred terminology can be added accurately later.</p></div>
    </section>
    <section className="split-section reversed"><div className="image-frame detail-image" /><div className="split-copy"><p className="eyebrow">Architecture & landscape</p><h2>Let the place<br /><em>speak for itself.</em></h2><p>Use this space for a visual tour of the gate, main hall, garden, paths and details that visitors may otherwise miss.</p></div></section>
  </>
}
