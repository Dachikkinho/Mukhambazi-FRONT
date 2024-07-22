"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./styles/NotFound.module.scss";

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Page not found - Chakrulos";
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.mainLogo}>
        <img
          className={styles.chakrulo}
          src="/logo.png"
          alt="Logo"
          draggable={false}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>404</h1>
        <p className={styles.message}>Page not found</p>
        <p>Ooops! The page you are looking for does not exist.
        It might have been moved or deleted.</p>
      </div>
      <div className={styles.back}>
        <Link href="/" className={styles.link}>
        <img src="/icons/backtohome.svg" alt="sdsd" width={24} height={24} />
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;