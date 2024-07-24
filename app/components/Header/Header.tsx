import styles from './Header.module.scss';

type Props = {
    title: string;
    icon: string;
    width: number;
    height: number;
};

export const Header = ({ title, icon, width, height }: Props) => {
    return (
        <div className={styles.headingCont}>
            <img
                src={`icons/${icon}.svg`}
                alt="icon"
                className={styles.icon}
                width={width}
                height={height}
            />
            <h5 className={styles.heading}>{title}</h5>
        </div>
    );
};
