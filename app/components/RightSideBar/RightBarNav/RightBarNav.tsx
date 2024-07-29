'use client';

import React, { useEffect, useState } from 'react';
import styles from './RightBarNav.module.scss';
import { useRouter, usePathname } from 'next/navigation';
import { useProfile } from '@/app/hooks/useProfile';


export function RightBarNav() {
    const { profileImage, name } = useProfile();
    const [isNotificationView, setIsNotificationView] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNavigation = (path: string) => {
        router.push(path);
        setIsDropdownOpen(false);
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

            <div className={styles.userMenu}>
                <button className={styles.userPfp} onClick={toggleDropdown}>
                    <img
                        src={profileImage}
                        alt="User Profile"
                        draggable={false}
                    />
                </button>
                {isDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                        <button onClick={() => handleNavigation('/profile')}>Profile</button>
                        <button onClick={() => handleNavigation('/login')}>Log out</button>
                    </div>
                )}
            </div>
        </div>
    );
}
