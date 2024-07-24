import styles from "./SideBarHeading.module.scss";

type Props = {
    text: string;
}

const SideBarHeading = ({ text }: Props) => {
    return (
        <h2 className={styles.heading}>
            {text}
        </h2>
    );
}

export default SideBarHeading;
