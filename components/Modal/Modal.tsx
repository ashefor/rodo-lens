'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import styles from './Modal.module.css';
import { Work } from '@/data/works';

interface ModalProps {
  work: Work | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ work, isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!work) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose}>
              ✕
            </button>
            <div className={styles.mediaContainer}>
              {work.mediaType === 'video' ? (
                <video
                  src={work.mediaUrl}
                  controls
                  autoPlay
                  className={styles.media}
                />
              ) : (
                <img src={work.mediaUrl} alt={work.title} className={styles.media} />
              )}
            </div>
            <div className={styles.info}>
              <h3>{work.title}</h3>
              <p>{work.client}</p>
              <p className={styles.details}>
                {work.time} • {work.date} • {work.eventType}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
