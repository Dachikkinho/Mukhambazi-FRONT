import styles from './PreviousNext.module.scss';

type Props = {
    isPrev?: boolean;
};

const PreviousNext = ({ isPrev = false }: Props) => {
    return (
        <div className={styles.container}>
            {isPrev ? (
                <img
                    src="/icons/playerIcons/previous.svg"
                    alt="Previous"
                    draggable={false}
                />
            ) : (
                <img
                    src="/icons/playerIcons/next.svg"
                    alt="Next"
                    draggable={false}
                />
            )}
        </div>
    );
};

export default PreviousNext;
