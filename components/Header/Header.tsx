'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <header className={styles.header}>
        <motion.button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>

        <motion.div
          className={styles.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Divine Agbanibi
        </motion.div>

        <motion.div
          className={styles.date}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {today}
        </motion.div>
      </header>

      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
