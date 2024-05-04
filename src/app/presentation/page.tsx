// presentation/page.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import Canvas from '@/components/presentation/Canvas';
import { getUser } from '@/utils/auth';
import styles from './page.module.css'; 

const PresentationPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = getUser();
      setIsAuthenticated(authenticated);

      if (!authenticated) {
        window.location.href = '/';
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className={styles.spinner}></div> {/* Use the CSS module style here */}
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Create Your Presentation</h1>
      </div>
      <div>
        <Canvas />
      </div>
    </div>
  );
};
export default PresentationPage;
