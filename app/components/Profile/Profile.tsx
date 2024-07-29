'use client';

import React from 'react';
import styles from './Profile.module.scss';
import { useProfile } from '@/app/hooks/useProfile';


export function Profile() {
    const { profileImage, name, updateProfileImage, updateName } = useProfile();
    const [newProfileImage, setNewProfileImage] = React.useState<File | null>(null);
    const [newName, setNewName] = React.useState(name);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const newImage = URL.createObjectURL(e.target.files[0]);
            setNewProfileImage(e.target.files[0]);
            updateProfileImage(newImage);
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const handleSave = () => {
        if (newProfileImage) {
            updateProfileImage(URL.createObjectURL(newProfileImage));
        }
        updateName(newName);
        alert('Profile updated successfully!');
    };

    return (
        <div className={styles.container}>
            <h1>Profile</h1>
            <div className={styles.profileImageSection}>
                <img src={profileImage} alt="Profile" className={styles.profileImage} />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={styles.imageUpload}
                />
            </div>
            <div className={styles.nameSection}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={newName}
                    onChange={handleNameChange}
                    className={styles.nameInput}
                />
            </div>
            <button onClick={handleSave} className={styles.saveButton}>Save Changes</button>
        </div>
    );
}
