import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={styles.container}>
            <Link href="/">
                <h1 className={styles.logo}>CHAKRULOS</h1>
            </Link>
            <Link href="/natusvincere">
                <p className={styles.subName}>By NaVi™</p>
            </Link>
        </div>
    );
};

export default Logo;
