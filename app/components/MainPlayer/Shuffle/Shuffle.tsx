import styles from './Shuffle.module.scss';
import React from 'react';

type Props = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isActive: boolean;
};

const Shuffle = ({ onClick, isActive }: Props) => {
    return (
        <button
            onClick={onClick}
            className={
                isActive ? `${styles.button} ${styles.active}` : styles.button
            }
        >
            <img
                src="/icons/playerIcons/shuffle.svg"
                alt="icon"
                draggable={false}
            />
        </button>
    );
};

export default Shuffle;
