'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    title: 'Wedding Videography',
    description: 'Capturing your most precious moments with cinematic excellence.',
    features: [
      'Full ceremony coverage',
      'Drone footage',
      'Professional editing',
      'Same-day highlights',
      'Multiple camera angles'
    ]
  },
  {
    id: 2,
    title: 'Real Estate Content',
    description: 'Showcase properties with stunning visuals that sell.',
    features: [
      'Aerial drone shots',
      'Interior walkthroughs',
      'Twilight photography',
      'Virtual tours',
      '4K video quality'
    ]
  },
  {
    id: 3,
    title: 'Product Shoots',
    description: 'Make your products stand out with professional content.',
    features: [
      'Studio lighting',
      'Lifestyle shots',
      'Detail close-ups',
      'Motion graphics',
      'E-commerce ready'
    ]
  },
  {
    id: 4,
    title: 'Corporate Events',
    description: 'Professional coverage for your business gatherings.',
    features: [
      'Conference coverage',
      'Team building events',
      'Product launches',
      'Interviews',
      'Promotional videos'
    ]
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <div ref={containerRef} className={styles.servicesWrapper}>
      <div className={styles.sticky}>
        <motion.div className={styles.servicesContainer} style={{ x }}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.serviceImage}>
                <div className={styles.placeholder}>
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" stroke="#eb5e28" strokeWidth="2" fill="none" />
                    <path d="M60,100 L100,60 L140,100 L100,140 Z" stroke="#eb5e28" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
