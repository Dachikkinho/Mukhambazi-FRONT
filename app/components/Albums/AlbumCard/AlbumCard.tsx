import styles from "./AlbumCard.module.scss"

type Props = {
    name: string;
    lastName: string;
    plays: string;
    image: string
}

export const AlbumCard = ({ name, lastName, plays, image }: Props) => {

    return (

        <div className={styles.artists}>
            <div className={styles.containers}>
                <img className={styles.img} src={`${image}`} alt="cover" width={492} height={256} />
                <div className={styles.spans}>
                    <span className={styles.firstspan}>
                        {name} {lastName}
                    </span>
                    <span className={styles.default}>{plays}</span>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard;














