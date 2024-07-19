import styles from "./SidebarNavItems.module.scss"
import Link from "next/link";

type Props = {
    link: string,
    img: string,
    name: string,
    id: number
}

export function SidebarNavItems({link, img, name, id}: Props) {
    return (
        <li key={id}>
            <Link href={link} className={styles.link} >
                <img src={`/icons/${img}.svg`} alt="icon" />
                <p>{name}</p>
            </Link>
        </li>
    )
}