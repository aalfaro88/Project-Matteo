// components/authentication-components/Login.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Login.module.css';

export default function Login() {
  // Client-specific logic can be included here
  const handleSignIn = (provider: string) => {
    if (provider === 'google') {
      window.location.href = '/api/auth/google-sign-in';
    }
    // Additional providers can be handled similarly
  };

  // Component uses the `use client` directive to ensure it's treated as a Client Component
  return (
    <div className={styles.container}>
      <div className={styles.logincontainer}>

        <label className={styles.label}>Email:</label>
        <input type="email" placeholder="Enter your email" className={styles.input} />
        <label className={styles.label}>Password:</label>
        <input type="password" placeholder="Enter your password" className={styles.input} />
        <a href="#" className={styles.forgotPassword}>Forgot password?</a>
        <button className={styles.logInButton}>Log In</button>

        <p className={styles.orLoginWith}>Or Login With</p>
        <div className={styles.socialNetworkContainer}>
          <div className={styles.socialNetworkButton}>
            <Image src="/images/facebook-logo.png" alt="Facebook" width={35} height={35} />
          </div>

          <div className={styles.socialNetworkButton} onClick={() => handleSignIn('google')}>
            <Image src="/images/google-logo.png" alt="Google" width={35} height={35} />
          </div>

          <div className={styles.socialNetworkButton}>
            <Image src="/images/apple-logo.png" alt="Apple" width={35} height={35} />
          </div>
        </div>
      </div>
    </div>
  );
}