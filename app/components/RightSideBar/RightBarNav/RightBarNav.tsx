import styles from './RightBarNav.module.scss';

export function RightBarNav() {
    return (
        <div className={styles.container}>
            <button className={styles.navButton}>
                <img src="/icons/bell.svg" alt="dark" draggable={false} />
            </button>

            <button className={styles.userPfp}>
                <img src="/images/user_pfp.png" alt="logo" draggable={false} />
            </button>
        </div>
    );
}

//arshveba aq
