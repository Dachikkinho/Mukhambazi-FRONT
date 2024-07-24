import styles from "./SidebarNavItems.module.scss";
import Link from "next/link";

type Props = {
    link: string;
    img: string;
    name: string;
}

const SidebarNavItems = ({ link, img, name }: Props) => {
    return (
        <li>
            <Link href={link} className={styles.link}>
                <img src={`/icons/${img}.svg`} alt="icon" />
                <p>{name}</p>
            </Link>
        </li>
    );
}

export default SidebarNavItems;
