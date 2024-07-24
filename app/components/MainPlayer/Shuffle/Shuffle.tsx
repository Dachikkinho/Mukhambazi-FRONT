import styles from "./Shuffle.module.scss";

type Props = {
    onClick: any; 
    isActive: boolean;
}

const Shuffle = ({ onClick, isActive }: Props) => {
    return (
        <button 
            onClick={onClick} 
            className={isActive ? `${styles.button} ${styles.active}` : styles.button}
        >
            <img src="/icons/playerIcons/shuffle.svg" alt="icon" />
        </button>
    );
}

export default Shuffle;
