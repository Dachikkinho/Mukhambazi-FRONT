import styles from '../LandingCard/LandingCard.module.scss';

type Props = {
    bgColor: string;
    name: string;
    plays: string;
    img: string;
};

const LandingCard = ({ bgColor, name, plays, img }: Props) => {
    return (
        <div
            className={styles.mainContainer}
            style={{
                background: bgColor,
            }}
        >
            <img
                src={img}
                className={styles.pfp}
                alt="pfp"
                draggable={false}
            />
            <h6 className={styles.name}>{name}</h6>
            <p className={styles.plays}>{plays}M Plays</p>
        </div>
    );
};

export default LandingCard;
