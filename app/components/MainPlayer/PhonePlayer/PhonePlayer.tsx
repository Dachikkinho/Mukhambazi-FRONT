import styles from './PhonePlayer.module.scss';

type Props = {
    open: boolean;
    openFunc: () => void;
    image: string;
    name: string;
    artistName: string;
    closeFunc: () => void;
    upNext: boolean;
};

const PhonePlayer = ({
    open,
    openFunc,
    image,
    name,
    artistName,
    closeFunc,
    upNext,
}: Props) => {
    return (
        <div
            className={`${styles.cont} ${open && styles.contActive} ${upNext && styles.top}`}
        >
            <button className={styles.close} onClick={closeFunc}>
                <img
                    src="/icons/collapse.svg"
                    alt=""
                    className={styles.icon}
                    draggable={false}
                />
            </button>
            <img
                src={image}
                alt=""
                className={styles.image}
                onClick={() => openFunc()}
                draggable={false}
            />
            <p className={styles.songName}>{name}</p>
            <p className={styles.artistName}>{artistName}</p>
        </div>
    );
};

export default PhonePlayer;
