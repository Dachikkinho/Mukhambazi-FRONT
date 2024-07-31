'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import MainSection from '../components/MainSection/MainSection';

const Home = () => {
    useEffect(() => {
        document.title = 'Chakrulos - Web Player: Music for everyone';
    }, []);
    return (
        <main className={styles.main}>
            <MainSection />
        </main>
    );
};

export default Home;
