import { useSetRecoilState } from 'recoil';
import styles from './SidebarNavItems.module.scss';
import Link from 'next/link';
import { sideBarOpenState } from '@/app/states';

type Props = {
    link: string;
    img: string;
    name: string;
};

const SidebarNavItems = ({ link, img, name }: Props) => {
    const setSideBarOpen = useSetRecoilState(sideBarOpenState);

    return (
        <li
            onClick={() => {
                setSideBarOpen(false);
            }}
        >
            <Link href={link} className={styles.link}>
                <img src={`/icons/${img}.svg`} alt="icon" draggable={false} />
                <p>{name}</p>
            </Link>
        </li>
    );
};

export default SidebarNavItems;
