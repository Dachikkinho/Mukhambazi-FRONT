'use client';

import styles from './page.module.scss';
import { useEffect } from 'react';
import { Profile } from '@/app/components/Profile/Profile';

const ProfilePage = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Profile';
    }, []);

    return (
        <main className={styles.main}>
            <Profile />
        </main>
    );
};

export default ProfilePage;
