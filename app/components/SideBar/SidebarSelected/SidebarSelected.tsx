'use client';

import styles from './SidebarSelected.module.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SidebarSelected = () => {
    const path = usePathname();
    const [position, setPosition] = useState('179px');

    useEffect(() => {
        switch (path) {
            case '/':
                setPosition('179px');
                break;
            case '/artists':
                setPosition('228px');
                break;
            case path.startsWith('/albums') ? path : '':
                setPosition('275px');
                break;
            case '/songs':
                setPosition('448px');
                break;
            case '/playlist':
                setPosition('402px');
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
