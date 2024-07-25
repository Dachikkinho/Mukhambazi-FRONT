import styles from './Playlist.module.scss';

type Props = {
    title: string;
    date: string;
    icon: string;
    playbtn: string;
};

const Listdisabled = ({ title, date, icon, playbtn }: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.listdisabled}>
                <div>
                    <span className={styles.span}>
                        {title}
                        <p className={styles.paragraph}> 
                            <img src={`icons/${icon}.svg`} alt="greenicon" draggable={false} />
                            {date}
                        </p>
                    </span>
                </div>
                <div>
                    <img
                        className={styles.image}
                        src={`icons/${playbtn}.svg`}
                        alt="icon"
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default Listdisabled;
