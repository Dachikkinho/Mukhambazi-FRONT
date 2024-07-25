import styles from './ArtistcardHeader.module.scss';

type Props = {
    title: string;
    icon: string;
};

const ArtistcardHeader = ({ title, icon }: Props) => {
    return (
        <div className={styles.cardsHeading}>
            <h4>{title}</h4>
            <img
                className={styles.img}
                src={`icons/${icon}.svg`}
                alt="icon"
                width={28}
                height={28}
                draggable={false}
            />
        </div>
    );
};

export default ArtistcardHeader;
