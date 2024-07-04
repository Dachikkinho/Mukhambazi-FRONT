import styles from "./SideBarHeading.module.scss"

export function SideBarHeading(props: {text: string}) {
    return (
        <h2 className={styles.heading}>
            {props.text}
        </h2>
    )
}