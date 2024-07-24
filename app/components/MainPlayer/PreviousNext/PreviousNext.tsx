import styles from './PreviousNext.module.scss';

type Props = {
    isPrev?: boolean;
};

const PreviousNext = ({ isPrev = false }: Props) => {
    return (
        <div className={styles.container}>
            {isPrev ? (
                <img src="/icons/playerIcons/previous.svg" alt="Previous" />
            ) : (
                <img src="/icons/playerIcons/next.svg" alt="Next" />
            )}
        </div>
    );
};

export default PreviousNext;
