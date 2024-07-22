"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./styles/NotFound.module.scss";

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Page not found";
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
        <p>We can’t seem to find the page you are looking for.</p>
      </div>
      <div className={styles.back}>
        <Link href="/" className={styles.link}>
          Home 
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
