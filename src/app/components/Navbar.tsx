'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

const home = 'http://localhost:3000/'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Left: Logo + Links */}
      <div className={styles.navLeft}>
        <Link href={home}>
          <Image
            src='/assets/logo.png'
            alt='Logo'
            width={100}
            height={100}
            className={styles.logo}
            priority
          />
        </Link>
        <Link
          href='{home}'
          className={styles.link}
        >
          Home
        </Link>
        <Link
          href='/legends'
          className={styles.link}
        >
          Legends
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
