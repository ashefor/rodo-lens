'use client';

import { motion } from 'framer-motion';
import styles from './CTAButton.module.css';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

export default function CTAButton({ text, onClick, href }: CTAButtonProps) {
  const ButtonContent = () => (
    <motion.button
      className={styles.ctaButton}
      onClick={onClick}
      whileHover="hover"
      initial="initial"
      animate="initial"
    >
      <motion.span
        className={styles.background}
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 }
        }}
        transition={{ duration: 0.3 }}
      />
      <span className={styles.text}>{text.toUpperCase()}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        <ButtonContent />
      </a>
    );
  }

  return <ButtonContent />;
}
