import styles from './FavoriteCard.module.scss';

type Props = {
    title: string;
    banner: string;
    icon: string;
    width: string;
    height: string;
};

const FavoriteCard = ({ title, banner, icon, width, height }: Props) => {
    return (
        <div className={styles.Container}>
            <img src={banner} alt="banner" />
            <div className={styles.Name}>
                <div>
                    <h4>{title}</h4>
                </div>
                <img src={icon} alt="icon" width={width} height={height} />
            </div>
        </div>
    );
};

export default FavoriteCard;
