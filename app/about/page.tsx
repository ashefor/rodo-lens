'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import styles from './page.module.css';
import CTAButton from '@/components/CTAButton/CTAButton';
import WorkCard from '@/components/WorkCard/WorkCard';
import Modal from '@/components/Modal/Modal';
import { works } from '@/data/works';
import { useLenis } from '@/hooks/useLenis';
import { Work } from '@/data/works';

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}+</span>;
}

export default function About() {
  useLenis();
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (work: Work) => {
    setSelectedWork(work);
    setModalOpen(true);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.pageTitle}>ABOUT ME</h1>
          <div className={styles.description}>
            <p>
              Hello! I'm <strong>Divine Agbanibi</strong>, the creative force behind <strong>Rodo Lens</strong>. 
              With a passion for visual storytelling and years of experience in digital content creation, 
              I specialize in transforming ordinary moments into extraordinary memories.
            </p>
            <p>
              Whether it's the joy of a wedding day, the elegance of a property showcase, the precision 
              of a product shoot, or the energy of a corporate event, I bring a unique blend of technical 
              expertise and artistic vision to every project. My goal is simple: to create content that 
              not only meets your expectations but exceeds them.
            </p>
            <p>
              Based in Nigeria, I serve clients locally and internationally, always bringing the same 
              level of professionalism and dedication. Let's create something amazing together!
            </p>
          </div>
          <CTAButton text="CONTACT ME" onClick={scrollToContact} />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <motion.div
          className={styles.statsContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.stat}>
            <div className={styles.statNumber}>
              <Counter target={150} />
            </div>
            <p className={styles.statLabel}>Clients Served</p>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>
              <Counter target={300} />
            </div>
            <p className={styles.statLabel}>Projects Completed</p>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>
              <Counter target={5} />
            </div>
            <p className={styles.statLabel}>Years Experience</p>
          </div>
        </motion.div>
      </section>

      {/* Sample Works Section */}
      <section className={styles.sampleWorksSection}>
        <motion.div
          className={styles.sectionTitleWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>SAMPLE WORKS</h2>
        </motion.div>

        <div className={styles.worksGrid}>
          <div className={styles.row1}>
            <WorkCard work={works[0]} onCardClick={handleCardClick} />
            <WorkCard work={works[1]} onCardClick={handleCardClick} />
          </div>
          <div className={styles.row2}>
            <WorkCard work={works[2]} onCardClick={handleCardClick} />
            <WorkCard work={works[3]} onCardClick={handleCardClick} />
          </div>
          <div className={styles.row3}>
            <WorkCard work={works[4]} onCardClick={handleCardClick} />
            <WorkCard work={works[5]} onCardClick={handleCardClick} />
          </div>
        </div>

        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <CTAButton text="SEE MY WORKS" href="/works" />
        </motion.div>
      </section>

      <Modal work={selectedWork} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
