'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './RightBarNav.module.scss';
import { useRouter, usePathname } from 'next/navigation';

export function RightBarNav() {
    const [isNotificationView, setIsNotificationView] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

            <div className={styles.userMenu} ref={dropdownRef}>
                <button className={styles.userPfp} onClick={toggleDropdown}>
                    <img
                        src="/icons/user.png"
                        alt="User Profile"
                        draggable={false}
                    />
                </button>
                {isDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                        <button onClick={() => handleNavigation('/login')}>
                            Log out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
