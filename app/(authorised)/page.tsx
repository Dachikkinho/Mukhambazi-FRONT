'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import MainSection from '../components/MainSection/MainSection';
import PrivateRoute from '../components/ProtectedRoute/PrivateRoute';

const Home = () => {
    useEffect(() => {
        document.title = 'Chakrulos - Web Player: Music for everyone';
    }, []);
    return (
        <PrivateRoute>
            <main className={styles.main}>
                <MainSection />
            </main>
        </PrivateRoute>
    );
};

export default Home;
