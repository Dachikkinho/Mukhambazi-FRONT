'use client';

import styles from './SidebarSelected.module.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SidebarSelected = () => {
    const path = usePathname();
    const [position, setPosition] = useState('178px');

    useEffect(() => {
        switch (path) {
            case '/':
                setPosition('178px');
                break;
            case path.startsWith('/artists') ? path : '':
                setPosition('226px');
                break;
            case path.startsWith('/albums') ? path : '':
                setPosition('275px');
                break;
            case path.startsWith('/playlist') ? path : '':
                setPosition('400px');
                break;
            case '/songs':
                setPosition('448px');
                break;
            case '/favorites':
                setPosition('496px');
                break;
            default:
                setPosition('179px');
        }
    }, [path]);

    return <div className={styles.main} style={{ top: position }}></div>;
};

export default SidebarSelected;
