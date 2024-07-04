import styles from "./SideBarHeading.module.scss"

type Props = {
    text: string
}

export function SideBarHeading({text}: Props) {
    return (
        <h2 className={styles.heading}>
            {text}
        </h2>
    )
}