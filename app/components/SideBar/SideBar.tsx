'use client'

import styles from "./SideBar.module.scss"
import { Logo } from "./Logo/Logo";
import { SideBarHeading } from "./SideBarHeading/SideBarHeading";
import { SideBarNav } from "./SideBarNav/SideBarNav";
import { sideBarOpenState } from "@/app/states";
import { useRecoilState } from "recoil";

export function SideBar() {

    const [isActive, setIsActive] = useRecoilState(sideBarOpenState)

    return (
        <aside className={`${styles.sidebar} ${isActive && styles.active}`}>
            <div className={styles.wrapper}>
                <Logo />
                <div className={styles.navSection}>
                    <SideBarHeading text="Main Menu"/>
                    <SideBarNav
                    names={['Home', 'Artists', 'Albums', 'Songs']}
                    imgs={['home-icon', 'artists-icon', 'albums-icon', 'songs-icon']}
                    links={["#", "#", "#", "#"]}
                    />
                </div>
                <SideBarHeading text="For You"/>
                <SideBarNav
                names={['Playlist', 'Specials', 'Favorites', 'Podcasts']}
                imgs={['my-playlists-icon', 'my-albums-icon', 'favorites-icon', 'podcasts-icon']}
                links={["#", "#", "#", "#"]}
                />
            </div>
        </aside>
    )
}