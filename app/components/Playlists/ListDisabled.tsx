import { useState } from 'react';
import styles from './Playlist.module.scss';

type Props = {
    title: string;
    date: string;
    icon: string;
    playbtn: string;
    className?: string;
    onRename: (newName: string) => void;
    onPhotoChange: (newPhoto: File) => void;
};

const Listdisabled = ({
    title,
    date,
    icon,
    playbtn,
    className,
    onRename,
    onPhotoChange,
}: Props) => {
    const [editTitle, setEditTitle] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [, setPhotoInput] = useState<File | null>(null);

    const handleTitleChange = () => {
        if (newTitle.trim()) {
            onRename(newTitle);
            setEditTitle(false);
        }
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPhotoInput(file);
            onPhotoChange(file);
        }
    };

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <div className={styles.listdisabled}>
                <div>
                    {editTitle ? (
                        <>
                            <input
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                            <button onClick={handleTitleChange}>Save</button>
                        </>
                    ) : (
                        <span className={styles.span}>
                            {title}
                            <button onClick={() => setEditTitle(true)}>
                                Edit
                            </button>
                        </span>
                    )}
                    <p className={styles.paragraph}>
                        <img
                            src={`icons/${icon}.svg`}
                            alt="icon"
                            draggable={false}
                        />
                        {date}
                    </p>
                </div>
                <div>
                    <img
                        className={styles.image}
                        src={`icons/${playbtn}.svg`}
                        alt="icon"
                        draggable={false}
                    />
                </div>
                <input
                    type="file"
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    style={{ display: 'none' }}
                    id={`upload-${title}`}
                />
                <label
                    htmlFor={`upload-${title}`}
                    className={styles.uploadLabel}
                >
                    Change Photo
                </label>
            </div>
        </div>
    );
};

export default Listdisabled;
