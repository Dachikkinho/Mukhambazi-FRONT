import Link from "next/link";
import styles from "./SidebarNav.module.scss"
import { SidebarNavItems } from "./SidebarNavItems/SidebarNavItems";

type mapItem = {
    name: string,
    img: string,
    link: string
}

type Props = {
    navItemsMap: mapItem[]
}

export function SidebarNav({navItemsMap}: Props) {

    return (
        <nav className={styles.mainCont}>
            <img src="/images/sidebar-lines.svg" alt="lines" className={styles.lines}/>
            <ul className={styles.linksWrap}>
                {navItemsMap.map(item => (
                    <SidebarNavItems name={item.name} img={item.img} link={item.link}/>
                ))}
            </ul>
        </nav>
    )
}