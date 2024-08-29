import { useRouter } from 'next/navigation';
import styles from './Search.module.scss';
import { useState } from 'react';

type Props = {
    placeholder: string;
    icon: string;
    width: number;
    height: number;
    value?: string;
};

const Search = ({ placeholder, icon, width, height, value }: Props) => {
    const router = useRouter();
    const [searchText, setSearchText] = useState(value || '');

    function search(value: string) {
        if (value.length > 0) {
            router.push(`/search?query=${value}`);
        } else {
            router.push('/');
        }
    }

    function enter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            search(searchText);
        }
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(e.target.value);
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.mainSearch}
                value={searchText}
                onChange={onChange}
                onKeyDown={enter}
            />
            <img
                src={`icons/${icon}.svg`}
                alt="icon"
                className={styles.searchIcon}
                width={width}
                height={height}
                draggable={false}
                onClick={() => search(searchText)}
            />
        </div>
    );
};

export default Search;
