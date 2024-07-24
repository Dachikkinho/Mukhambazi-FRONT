import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>CHAKRULOS</h1>
            <p className={styles.subName}>By NaVi™</p>
        </div>
    );
}

export default Logo;
