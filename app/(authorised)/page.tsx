'use client';

import { useEffect } from 'react';
import { MainSection } from '../components/MainSection/MainSection';
import styles from './page.module.css';

export default function Home() {
    useEffect(() => {
        document.title = 'Chakrulos';
    }, []);
    return (
        <main className={styles.main}>
            <MainSection />
        </main>
    );
}
