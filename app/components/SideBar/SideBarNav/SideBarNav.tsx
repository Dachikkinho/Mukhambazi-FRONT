import styles from '../SideBarNav/SideBarNav.module.scss';
import SidebarNavItems from '../SideBarNav/SidebarNavItems/SidebarNavItems';

type MapItem = {
    name: string;
    img: string;
    link: string;
};

type Props = {
    navItemsMap: MapItem[];
};

const SideBarNav = ({ navItemsMap }: Props) => {
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
};

export default SideBarNav;
