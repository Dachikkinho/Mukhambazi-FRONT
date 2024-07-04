import Link from "next/link";
import styles from "./SideBarNav.module.scss"

export function SideBarNav(props: {names: string[], imgs: string[], links: string[]}) {
    return (
        <nav className={styles.mainCont}>
            <img src="/images/sidebar-lines.svg" alt="lines" className={styles.lines}/>
            <ul className={styles.linksWrap}>
                <li>
                    <Link href={props.links[0]} className={styles.link}>
                        <img src={`/icons/${props.imgs[0]}.svg`} alt="icon" />
                        <p>{props.names[0]}</p>
                    </Link>
                </li>

                <li>
                    <Link href={props.links[1]} className={styles.link}>
                        <img src={`/icons/${props.imgs[1]}.svg`} alt="" />
                        <p>{props.names[1]}</p>
                    </Link>
                </li>

                <li>
                    <Link href={props.links[2]} className={styles.link}>
                        <img src={`/icons/${props.imgs[2]}.svg`} alt="" />
                        <p>{props.names[2]}</p>
                    </Link>
                </li>

                <li>
                    <Link href={props.links[3]} className={styles.link}>
                        <img src={`/icons/${props.imgs[3]}.svg`} alt="" />
                        <p>{props.names[3]}</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}