'use client'

import styles from "./SideBar.module.scss"
import { Logo } from "./Logo/Logo";
import { SideBarHeading } from "./SideBarHeading/SideBarHeading";
import { sideBarOpenState } from "@/app/states";
import { useRecoilState } from "recoil";
import { SidebarNav } from "./SidebarNav/SidebarNav";

export function SideBar() {

    const [isActive, setIsActive] = useRecoilState(sideBarOpenState)

    const mainMenuItems = [
        {
            name: 'Home',
            img: "home-icon",
            link: "#"
        },
        {
            name: 'Artists',
            img: "artists-icon",
            link: "#"
        },
        {
            name: 'Albums',
            img: "albums-icon",
            link: "#"
        },
        {
            name: 'Songs',
            img: "songs-icon",
            link: "#"
        },
    ]

    const forYouItems = [
        {
            name: 'Playlist',
            img: "my-playlists-icon",
            link: "#"
        },
        {
            name: 'Specials',
            img: "my-albums-icon",
            link: "#"
        },
        {
            name: 'Favorites',
            img: "favorites-icon",
            link: "#"
        },
        {
            name: 'Podcasts',
            img: "podcasts-icon",
            link: "#"
        },
    ]

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