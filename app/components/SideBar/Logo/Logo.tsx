import styles from "./Logo.module.scss"

export function Logo() {
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>Chakrulos</h1>
            <h6 className={styles.name}>Navi™</h6>
        </div>
    )
}