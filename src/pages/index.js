import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useEffect, useRef } from 'react';
import styles from './index.module.css';

// ─── Floating notes config ────────────────────────────────────────────────────
// char:  any of ♩ ♪ ♫ ♬
// cls:   matches a .noteN rule in index.module.css (position/size/timing live there)
// depth: how far the note moves with the mouse — higher = more parallax (good range: 8–30)
// To add a note: add an entry here + a matching .noteN block in the CSS.
const NOTES = [
  { char: '♩', cls: styles.note1,  depth: 22 },
  { char: '♪', cls: styles.note2,  depth: 13 },
  { char: '♬', cls: styles.note3,  depth: 30 },
  { char: '♫', cls: styles.note4,  depth: 17 },
  { char: '♩', cls: styles.note5,  depth: 10 },
  { char: '♪', cls: styles.note6,  depth: 25 },
  { char: '♬', cls: styles.note7,  depth: 18 },
  { char: '♩', cls: styles.note8,  depth: 8  },
  { char: '♫', cls: styles.note9,  depth: 21 },
  { char: '♪', cls: styles.note10, depth: 15 },
];

function HomepageHero() {
  const heroRef  = useRef(null);
  const spotRef  = useRef(null);
  const noteRefs = useRef([]);

  useEffect(() => {
    const hero = heroRef.current;
    const spot = spotRef.current;
    if (!hero || !spot) return;

    let rafId     = null;
    let lastEvent = null;

    const processMove = () => {
      rafId = null;
      const e = lastEvent;
      if (!e) return;

      const { left, top, width, height } = hero.getBoundingClientRect();
      const nx = ((e.clientX - left) / width  - 0.5) * 2;
      const ny = ((e.clientY - top)  / height - 0.5) * 2;
      const dx = (e.clientX - left) - width  / 2;
      const dy = (e.clientY - top)  - height / 2;

      spot.style.transition = 'none';
      spot.style.transform  = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy * 0.7}px))`;

      noteRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = NOTES[i].depth;
        el.style.setProperty('--note-x', `${nx * d}px`);
        el.style.setProperty('--note-y', `${ny * d}px`);
      });
    };

    // One DOM update per animation frame — keeps scrolling smooth
    const onMove = (e) => {
      lastEvent = e;
      if (!rafId) rafId = requestAnimationFrame(processMove);
    };

    const onLeave = () => {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      lastEvent = null;

      // 0.9s ease back to center — change this value to adjust the return speed
      spot.style.transition = 'transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)';
      spot.style.transform  = 'translate(-50%, -50%)';

      noteRefs.current.forEach((el) => {
        if (!el) return;
        el.style.setProperty('--note-x', '0px');
        el.style.setProperty('--note-y', '0px');
      });
    };

    hero.addEventListener('mousemove',  onMove,  { passive: true });
    hero.addEventListener('mouseleave', onLeave, { passive: true });
    return () => {
      hero.removeEventListener('mousemove',  onMove);
      hero.removeEventListener('mouseleave', onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className={styles.heroBanner} ref={heroRef}>
      <div className={styles.heroSpotlight} ref={spotRef} aria-hidden="true" />
      <div className={styles.heroNotes} aria-hidden="true">
        {NOTES.map(({ char, cls }, i) => (
          <span
            key={i}
            className={clsx(styles.note, cls)}
            ref={(el) => (noteRefs.current[i] = el)}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="container">
        {/* Small label above the title */}
        <div className={styles.heroEyebrow}>Under Development</div>
        <Heading as="h1" className={styles.heroTitle}>
          Trumpet Central
        </Heading>
        <p className={styles.heroSubtitle}>
          Learn the trumpet, tips and tricks, without the fluff, all for free.
        </p>
        <div className={styles.heroButtons}>
          {/* to="/docs" links to the learning section; change to any path or URL */}
          <Link className={clsx('button button--lg', styles.primaryButton)} to="/docs/welcome">
            Start Learning
          </Link>
          <Link
            className={clsx('button button--lg', styles.secondaryButton)}
            to="https://www.youtube.com/@trumpetcentral">
            YouTube Channel
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Learn How to Play Trumpet | Free Lessons & Tips for Beginners"
      description="Trumpet Central is your free guide to learning the trumpet. Step-by-step lessons, practice tips, gear recommendations, and more for beginners and advancing players.">
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
