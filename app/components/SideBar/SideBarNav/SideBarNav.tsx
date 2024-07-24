import Link from 'next/link';
import styles from './SidebarNav.module.scss';
import { SidebarNavItems } from './SidebarNavItems/SidebarNavItems';

type mapItem = {
    name: string;
    img: string;
    link: string;
};

type Props = {
    navItemsMap: mapItem[];
};

export function SideBarNav({ navItemsMap }: Props) {
    return (
        <nav className={styles.mainCont}>
            <ul className={styles.linksWrap}>
                {navItemsMap.map((item, i) => (
                    <SidebarNavItems
                        name={item.name}
                        img={item.img}
                        link={item.link}
                        key={i}
                    />
                ))}
            </ul>
        </nav>
    );
}
