'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './page.module.css';
import CTAButton from '@/components/CTAButton/CTAButton';
import WorkCard from '@/components/WorkCard/WorkCard';
import Services from '@/components/Services/Services';
import Testimonials from '@/components/Testimonials/Testimonials';
import Modal from '@/components/Modal/Modal';
import { works } from '@/data/works';
import { testimonials } from '@/data/testimonials';
import { useLenis } from '@/hooks/useLenis';
import { Work } from '@/data/works';

export default function Home() {
  useLenis();
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
      <section ref={heroRef} className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.p
            className={styles.helperText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            WELCOME TO RODO LENS
          </motion.p>

          <motion.div
            className={styles.heroTitle}
            style={{ scale, opacity }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.titleLine}>
              <span className={styles.decorLeft}>★</span>
              <h1>CREATING</h1>
            </div>
            <h1>VISUAL</h1>
            <div className={styles.titleLine}>
              <h1>MOTION</h1>
              <span className={styles.decorRight}>★</span>
            </div>
          </motion.div>

          <motion.p
            className={styles.helperText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            ELEVATING YOUR STORIES THROUGH FILM
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <CTAButton text="SCHEDULE CALL" href="https://calendly.com/rodolens" />
          </motion.div>
        </div>
      </section>

      {/* Professional Section */}
      <section className={styles.professionalSection}>
        <div className={styles.professionalContainer}>
          <div className={styles.professionalText}>
            <h2>Why Choose Rodo Lens?</h2>
            <p>
              At Rodo Lens, we don't just capture moments—we create visual stories that resonate. 
              With years of experience in digital content creation, we bring professionalism, 
              creativity, and technical excellence to every project. From intimate weddings to 
              large corporate events, we ensure every frame tells your unique story with cinematic quality.
            </p>
            <p>
              Our commitment to quality means using top-tier equipment, professional editing techniques, 
              and a keen eye for detail. We understand that your content represents your brand, your 
              memories, or your business—and we treat it with the care it deserves.
            </p>
          </div>
          <div className={styles.professionalCards}>
            <div className={styles.cardScroll}>
              {works.slice(0, 6).map((work) => (
                <WorkCard key={work.id} work={work} onCardClick={handleCardClick} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <motion.div
          className={styles.testimonialTitle}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>WHAT ARE THEY</h2>
          <h2>SAYING ABOUT ME?</h2>
        </motion.div>
        <Testimonials testimonials={testimonials} />
      </section>

      <Modal work={selectedWork} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
