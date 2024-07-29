'use client';

import React, { useEffect, useState } from 'react';
import styles from './RightBarNav.module.scss';
import { useRouter, usePathname } from 'next/navigation';

export function RightBarNav() {
    const [isNotificationView, setIsNotificationView] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const toggleNotificationView = () => {
        const newNotificationState = !isNotificationView;
        setIsNotificationView(newNotificationState);

        if (newNotificationState) {
            router.push('/content-feed');
        } else {
            router.push('/');
        }
    };

    useEffect(() => {
        if (!pathname.startsWith('/content-feed')) {
            setIsNotificationView(false);
        }
    }, [pathname]);

    return (
        <div className={styles.container}>
            <button
                className={`${styles.navButton} ${isNotificationView ? styles.active : ''}`}
                onClick={toggleNotificationView}
            >
                <img
                    src="/icons/bell.svg"
                    alt="Notification"
                    draggable={false}
                />
            </button>

            <button className={styles.userPfp} onClick={() => router.push('')}>
                <img
                    src="/images/user_pfp.png"
                    alt="User Profile"
                    draggable={false}
                />
            </button>
        </div>
    );
}
