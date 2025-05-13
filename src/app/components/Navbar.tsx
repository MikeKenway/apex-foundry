'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Left: Logo + Links */}
      <div className={styles.navLeft}>
        <Link href='/'>
          <Image
            src='/assets/logo.png'
            alt='Logo'
            width={100}
            height={100}
            className={styles.logo}
          />
        </Link>
        <Link
          href='/'
          className={styles.link}
        >
          Home
        </Link>
        <Link
          href='/about'
          className={styles.link}
        >
          About
        </Link>
      </div>

      {/* Right: Contact */}
      <div>
        <Link
          href='/contact'
          className='primaryBtn'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
