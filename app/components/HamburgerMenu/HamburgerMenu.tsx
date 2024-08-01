'use client';

import { useRecoilState } from 'recoil';
import styles from './HamburgerMenu.module.scss';
import { sideBarOpenState } from '@/app/states';
import { RightBarNav } from '../RightSideBar/RightBarNav/RightBarNav';

export function HamburgerMenu() {
    const [isActive, setIsActive] = useRecoilState(sideBarOpenState);

    const changeActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={styles.wrap}>
        <RightBarNav />
        <button
            className={`${styles.hamburgerMenu} ${isActive && styles.active}`}
            onClick={changeActive}
        >
            <div className={styles.lines}></div>
            <div className={styles.lines}></div>
            <div className={styles.lines}></div>
        </button>
        </div>
    );
}
