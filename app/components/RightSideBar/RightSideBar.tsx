import { CurrentListening } from "./CurrentListening/CurrentListening"
import { RightBarNav } from "./RightBarNav/RightBarNav"
import styles from "./RightSideBar.module.scss"

export function RightSideBar() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <RightBarNav />
                <CurrentListening musicName="Music"/>
            </div>
        </div>
    )
}