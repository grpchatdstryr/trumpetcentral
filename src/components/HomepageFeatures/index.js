import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// ─── Feature cards ────────────────────────────────────────────────────────────
// Edit icon, title, description, link, and linkText for each card.
// link can be an internal path (/docs, /blog) or a full URL.
// To add a card: copy one object and add it to the array.
const FeatureList = [
  {
    icon: '🎺',
    title: 'Learn the Trumpet',
    description:
      'Website dedicated to helping you get started with the trumpet.',
    link: '/docs/welcome',
    linkText: 'Browse Lessons',
  },
  {
    icon: '🔥',
    title: 'Inspire Passion',
    description:
      'Goal to motivate and become passionate about the instrument, not making it burdensome.',
    link: '/blog',
    linkText: 'Read the Blog',
  },
  {
    icon: '🎵',
    title: 'Free of Charge',
    description:
      'A passion project, built to assist fellow trumpet players and have fun, not to make money.',
    link: 'https://www.youtube.com/@trumpetcentral',
    linkText: 'Watch on YouTube',
  },
];

function Feature({ icon, title, description, link, linkText }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDesc}>{description}</p>
        <Link to={link} className={styles.featureLink}>
          {linkText} →
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          {/* Section heading — edit text directly here */}
          <h2 className={styles.sectionTitle}>Why Trumpet Central?</h2>
          <p className={styles.sectionSubtitle}>
            Your go-to "central" resource for everything trumpet
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
