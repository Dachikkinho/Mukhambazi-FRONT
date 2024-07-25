import styles from './Search.module.scss';

type Props = {
    placeholder: string;
    icon: string;
    width: number;
    height: number;

    //We don't need onchage until the search algorithm is ready.
};

const Search = ({ placeholder, icon, width, height }: Props) => {
    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.mainSearch}
            />
            <img
                src={`icons/${icon}.svg`}
                alt="icon"
                className={styles.searchIcon}
                width={width}
                height={height}
                draggable={false}
            />
        </div>
    );
};

export default Search;
