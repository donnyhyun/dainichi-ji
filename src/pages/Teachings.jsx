import { Link } from 'react-router-dom'

const lessons = [
  ['01', 'Begin with attention', 'Noticing one breath, one sound, one step can be enough to change the pace of a day.'],
  ['02', 'Let things be simple', 'A quiet practice does not need to be complicated. Make space before adding more.'],
  ['03', 'Return often', 'Meaning grows through repetition. A place becomes familiar by walking its paths again and again.'],
]

export default function Teachings() {
  return <>
    <section className="page-hero simple-hero"><div><p className="eyebrow">Teachings</p><h1>Wisdom for<br /><em>ordinary days.</em></h1><p>Short reflections are designed to feel like a pause rather than another thing to consume.</p></div></section>
    <section className="page-section lessons">
      {lessons.map(([num, title, text]) => <article className="lesson" key={num}><span>{num}</span><div><h2>{title}</h2><p>{text}</p></div><span>↗</span></article>)}
    </section>
    <section className="quote-section compact"><blockquote>What changes when we stop<br />trying to hurry the moment?</blockquote><Link className="text-link" to="/visit">Visit the temple <span>↗</span></Link></section>
  </>
}
