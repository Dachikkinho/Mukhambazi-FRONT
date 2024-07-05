import styles from "./AlbumCard.module.scss"

type Props = {
    name: string;
    group: string;
    plays: string;
    image: string
}

export const AlbumCard = ({ name, group, plays, image }: Props) => {

    return (

        <div className={styles.artists}>
            <div className={styles.containers}>
                <img className={styles.img} src={`images/${image}.jpg`} alt="cover" width={492} height={256} />
                <div className={styles.spans}>
                    <span className={styles.firstspan}>
                        {name}
                    </span>
                    <span className={styles.default}>{plays}</span>
                </div>
                <span className={styles.default}>{group}</span>
            </div>
        </div>
    )
}

export default AlbumCard;














