'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './RightBarNav.module.scss';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/app/AuthContext';
import { deleteCookie } from 'cookies-next';

const toggleDropdown = (
    isDropdownOpen: boolean,
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    setIsDropdownOpen(!isDropdownOpen);
};

export function RightBarNav() {
    const [isNotificationView, setIsNotificationView] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { logout } = useAuth();

    const toggleNotificationView = () => {
        const newNotificationState = !isNotificationView;
        setIsNotificationView(newNotificationState);

        router.push(newNotificationState ? '/content-feed' : '/');
    };

    const handleLogout = () => {
        logout();
        deleteCookie('jwt');
        router.push('/login');
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
                <button
                    className={styles.userPfp}
                    onClick={() =>
                        toggleDropdown(isDropdownOpen, setIsDropdownOpen)
                    }
                >
                    <img
                        src="/user.png"
                        alt="User Profile"
                        draggable={false}
                        height={50}
                        width={50}
                    />
                </button>
                {isDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                        <button onClick={handleLogout}>Log out</button>
                    </div>
                )}
            </div>
        </div>
    );
}
