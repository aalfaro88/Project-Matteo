// components/navbar/navbar.tsx

import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Ensure you have this CSS module
import { getUser } from '@/utils/auth';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await getUser();
      setIsAuthenticated(authenticated);
    };

    checkAuth();
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.homeButton}>
        <span className={styles.logoAndText}>
          <Image
            src="/images/logo-image-1.png"
            alt="Logo Image"
            width={50} 
            height={30}
            priority
            className={styles.logoImage}
          />
          <span className={styles.homeText}>Home</span>
        </span>
      </Link>
      {isAuthenticated && (
        <form action='/api/auth/signout' method="GET" className="mt-6">
          <button 
            type="submit"
            className={`${styles.logoutButton} ${styles.homeText}`}
          >
            Sign out
          </button>
        </form>
      )}
    </nav>
  );
};

export default Navbar;
