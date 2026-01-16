'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Testimonials.module.css';
import { Testimonial } from '@/data/testimonials';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
    >
      <div className={styles.carouselInner}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.testimonialCard}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.message}>&ldquo;{testimonials[current].message}&rdquo;</p>
            <div className={styles.footer}>
              <p className={styles.name}>{testimonials[current].name}</p>
              <p className={styles.business}>{testimonials[current].business}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showNav && (
          <>
            <motion.button
              className={`${styles.navButton} ${styles.prev}`}
              onClick={prev}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ‹
            </motion.button>
            <motion.button
              className={`${styles.navButton} ${styles.next}`}
              onClick={next}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ›
            </motion.button>
          </>
        )}
      </AnimatePresence>

      <div className={styles.indicators}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === current ? styles.active : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
