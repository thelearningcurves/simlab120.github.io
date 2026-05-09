import { useEffect, useMemo, useState } from 'react'
import './App.css'

// To update carousel images/captions:
// 1) Replace or add files in /public/images (work-1.svg, work-2.svg, ...)
// 2) Edit this list with your new image path + caption text
const workItems = [
  {
    src: '/images/work-1.svg',
    alt: 'Placeholder illustration of seismic waveform research',
    caption: 'Waveform inversion experiments in progress',
  },
  {
    src: '/images/work-2.svg',
    alt: 'Placeholder illustration of team whiteboard discussion',
    caption: 'Weekly group brainstorming session',
  },
  {
    src: '/images/work-3.svg',
    alt: 'Placeholder illustration of data visualization dashboard',
    caption: 'Interactive data visualization prototype',
  },
  {
    src: '/images/work-4.svg',
    alt: 'Placeholder illustration of field deployment setup',
    caption: 'Field sensor deployment planning',
  },
]

// To update people cards + social links:
// 1) Replace avatar files in /public/images (person-1.svg, person-2.svg, ...)
// 2) Edit each person object (name, role, avatar)
// 3) Add/remove social links by editing the socials array and URLs
const people = [
  {
    name: 'Avery Stone',
    role: 'Principal Investigator',
    avatar: '/images/person-1.svg',
    socials: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        icon: '/images/linkedin.svg',
      },
      { name: 'Website', href: 'https://example.com/', icon: '/images/link.svg' },
    ],
  },
  {
    name: 'Rin Patel',
    role: 'Postdoctoral Researcher',
    avatar: '/images/person-2.svg',
    socials: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        icon: '/images/linkedin.svg',
      },
      { name: 'Website', href: 'https://example.com/', icon: '/images/link.svg' },
    ],
  },
  {
    name: 'Kai Morgan',
    role: 'PhD Candidate',
    avatar: '/images/person-3.svg',
    socials: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        icon: '/images/linkedin.svg',
      },
      { name: 'Website', href: 'https://example.com/', icon: '/images/link.svg' },
    ],
  },
  {
    name: 'Noa Kim',
    role: 'Research Engineer',
    avatar: '/images/person-4.svg',
    socials: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        icon: '/images/linkedin.svg',
      },
      { name: 'Website', href: 'https://example.com/', icon: '/images/link.svg' },
    ],
  },
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = workItems.length

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % totalSlides)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [totalSlides])

  const trackStyle = useMemo(
    () => ({ transform: `translateX(-${activeSlide * 100}%)` }),
    [activeSlide],
  )

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">SIMLAB</p>
        <h1>Minimal, modern lab homepage</h1>
        <p className="intro">
          Placeholder site ready for your real projects, team profiles, and social links.
        </p>
      </header>

      <main className="content">
        <section aria-labelledby="current-work-title" className="panel">
          <div className="section-head">
            <h2 id="current-work-title">Current Work</h2>
            <div className="controls" aria-label="Carousel controls">
              <button
                type="button"
                className="control-button"
                onClick={() => setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides)}
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                type="button"
                className="control-button"
                onClick={() => setActiveSlide((activeSlide + 1) % totalSlides)}
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>

          <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Current Work carousel">
            <div className="carousel-track" style={trackStyle}>
              {workItems.map((item) => (
                <figure className="slide" key={item.src}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="dots" aria-hidden="true">
            {workItems.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={index === activeSlide ? 'dot active' : 'dot'}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="people-title" className="panel">
          <h2 id="people-title">People</h2>
          <div className="people-grid">
            {people.map((person) => (
              <article className="person-card" key={person.name}>
                <img className="avatar" src={person.avatar} alt={`${person.name} avatar placeholder`} loading="lazy" />
                <h3>{person.name}</h3>
                <p>{person.role}</p>
                <div className="social-links">
                  {person.socials.map((social) => (
                    <a
                      key={`${person.name}-${social.name}`}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${person.name} ${social.name}`}
                    >
                      <img src={social.icon} alt="" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
