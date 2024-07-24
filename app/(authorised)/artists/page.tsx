'use client';

import ArtistsPage from '@/app/components/Artists/Artists';
import styles from './page.module.scss';
import { useEffect } from 'react';

const Artists = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Artists ';
    }, []);

    return (
        <main className={styles.main}>
            <ArtistsPage />
        </main>
    );
};

export default Artists;
