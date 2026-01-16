'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQAccordion.module.css';
import { FAQ } from '@/data/faqs';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={styles.accordion}>
      {faqs.map((faq) => (
        <div key={faq.id} className={styles.item}>
          <button
            className={styles.question}
            onClick={() => toggleFAQ(faq.id)}
          >
            <span>{faq.question}</span>
            <span className={styles.icon}>{openId === faq.id ? '−' : '+'}</span>
          </button>
          <AnimatePresence>
            {openId === faq.id && (
              <motion.div
                className={styles.answer}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
