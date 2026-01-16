'use client';

import styles from './Footer.module.css';
import FAQAccordion from '../FAQAccordion/FAQAccordion';
import { faqs } from '@/data/faqs';

export default function Footer() {
  return (
    <footer>
      <div className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqLeft}>
            <h2 className={styles.faqTitle}>
              FREQUENTLY<br />ASKED<br />QUESTIONS
            </h2>
          </div>
          <div className={styles.faqRight}>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </div>

      <div className={styles.contactSection} id="contact">
        <div className={styles.contactContainer}>
          <p className={styles.contactText}>Ready to create something together?</p>
          <a href="https://wa.me/2348123456789" className={styles.whatsapp} target="_blank" rel="noopener noreferrer">
            +234 812 345 6789
          </a>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com/rodolens" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://tiktok.com/@rodolens" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://youtube.com/@rodolens" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://twitter.com/rodolens" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <p className={styles.copyright}>© 2026 Divine Agbanibi - Rodo Lens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
