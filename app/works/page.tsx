'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './page.module.css';
import WorkCard from '@/components/WorkCard/WorkCard';
import Modal from '@/components/Modal/Modal';
import { works } from '@/data/works';
import { useLenis } from '@/hooks/useLenis';
import { Work } from '@/data/works';

export default function Works() {
  useLenis();
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (work: Work) => {
    setSelectedWork(work);
    setModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.h1
          className={styles.pageTitle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WORKS
        </motion.h1>
      </section>

      {/* Works Grid */}
      <section className={styles.worksSection}>
        <div className={styles.worksGrid}>
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <WorkCard work={work} onCardClick={handleCardClick} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.a
          href="https://instagram.com/rodolens"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewMore}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          VIEW MORE ON INSTAGRAM →
        </motion.a>
      </section>

      <Modal work={selectedWork} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
