import styles from './ArtistCard.module.scss';

type Props = {
    bgColor: string;
    name: string;
    plays: string;
    pfp: string;
};

const ArtistCard = ({ bgColor, name, plays, pfp }: Props) => {
    return (
        <div
            className={styles.card}
            style={{
                backgroundColor: bgColor,
            }}
        >
            <div className={styles.container}>
                <img
                    src={pfp}
                    alt=""
                    className={styles.pfp}
                    draggable={false}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.plays}>{plays} Plays</p>
            </div>
        </div>
    );
};
export default ArtistCard;
