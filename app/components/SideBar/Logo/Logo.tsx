import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>CHAKRULOS</h1>
            <Link href="/natusvincere">
                <p className={styles.subName}>By NaVi™</p>
            </Link>
            <Link href="/">
                <h1 className={styles.logo}>CHAKRULOS</h1>
            </Link>
            <p className={styles.subName}>By NaVi™</p>
        </div>
    );
};

export default Logo;
