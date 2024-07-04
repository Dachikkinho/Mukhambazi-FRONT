'use client'

import styles from "./SideBar.module.scss"
import { Logo } from "./Logo/Logo";
import { SideBarHeading } from "./SideBarHeading/SideBarHeading";
import { sideBarOpenState } from "@/app/states";
import { useRecoilState } from "recoil";
import { SidebarNav } from "./SidebarNav/SidebarNav";
import { forYouItems, mainMenuItems } from "@/public/script";

export function SideBar() {

    const [isActive, setIsActive] = useRecoilState(sideBarOpenState)

    return (
        <aside className={`${styles.sidebar} ${isActive && styles.active}`}>
            <div className={styles.wrapper}>
                <Logo />
                <div className={styles.navSection}>
                    <SideBarHeading text="Main Menu"/>
                    <SidebarNav navItemsMap={mainMenuItems}/>
                </div>
                <SideBarHeading text="For You"/>
                <SidebarNav navItemsMap={forYouItems}/>
            </div>
        </aside>
    )
}