'use client';

import React, { useEffect, ReactNode, useState } from 'react';
import { useAuth } from '@/app/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './PrivateRoute.module.scss';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        const checkAuthentication = async () => {
            const user = localStorage.getItem('user');
            if (!user) {
                router.push('/login');
            } else {
                setLoading(false);
            }
        };

        checkAuthentication();
    }, [router]);

    if (loading) {
        return (
            <div className={styles.fullscreenSpinner}>
                <div className={styles.spinner}>
                    <img
                        className={styles.chakrulo}
                        src="/logo.png"
                        alt="Logo"
                        draggable={false}
                    />
                </div>
                <p className={styles.loading}>Chakrulos loading...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
};

export default PrivateRoute;
