import styles from "./ArtistCard.module.scss"

type Props = {
    bgColor: string;
    name: string;
    plays: string;
    img: string;
}

export const ArtistCard = ({bgColor, name, plays, img}: Props) => {

    return (
        <div className={styles.mainContainer} style={{
            background: bgColor
        }}>
            <img src={`images/artistPfp/${img}.png`} alt="pfp" />
            <h6 className={styles.name}>{name}</h6>
            <p className={styles.plays}>{plays}M Plays</p>
        </div>
    )
}