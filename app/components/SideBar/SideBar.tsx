'use client';

import styles from './SideBar.module.scss';
import { Logo } from './Logo/Logo';
import { SideBarHeading } from './SideBarHeading/SideBarHeading';
import { sideBarOpenState } from '@/app/states';
import { useRecoilState } from 'recoil';
import { SideBarNav } from './SideBarNav/SideBarNav';
import { forYouItems, mainMenuItems } from '@/public/script';
import { SidebarSelected } from './SidebarSelected/SidebarSelected';

export function SideBar() {
    const [isActive, setIsActive] = useRecoilState(sideBarOpenState);

    return (
        <aside className={`${styles.sidebar} ${isActive && styles.active}`}>
            <div className={styles.wrapper}>
                <Logo />
                <div className={styles.navSection}>
                    <SideBarHeading text="Main Menu" />
                    <SideBarNav navItemsMap={mainMenuItems} />
                </div>
                <SideBarHeading text="For You" />
                <SideBarNav navItemsMap={forYouItems} />
            </div>
            <SidebarSelected />
        </aside>
    );
}
