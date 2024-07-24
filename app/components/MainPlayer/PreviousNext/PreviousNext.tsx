import styles from './PreviousNext.module.scss';

type Props = {
    isPrev?: boolean;
};

export function PreviousNext({ isPrev }: Props) {
    return (
        <div className={styles.container}>
            {isPrev ? (
                <img src="/icons/playerIcons/previous.svg" alt="" />
            ) : (
                <img src="/icons/playerIcons/next.svg" alt="icon" />
            )}
        </div>
    );
}
