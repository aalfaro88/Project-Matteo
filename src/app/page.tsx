// app/page.tsx

'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Logos from '@/components/home/Logos';
import { getUser } from '@/utils/auth';
import Login from '../components/authentication-components/Login';
import StartGame from '../components/home/MainMenu'

const HomePage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await getUser();
      setIsAuthenticated(authenticated);
    };

    checkAuth();
  }, []);

  // Render loading state if authentication status is still pending
  if (isAuthenticated === null) {
    return <div></div>;
  }

  return (
    <div>
      <Navbar />
      <Logos />
      {isAuthenticated ? (
        <StartGame />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default HomePage;
