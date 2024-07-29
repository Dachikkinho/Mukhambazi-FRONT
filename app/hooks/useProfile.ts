import { useEffect, useState } from 'react';

export function useProfile() {
    const [profileImage, setProfileImage] = useState(() => {
        return localStorage.getItem('profileImage') || '/images/user_pfp.jpg';
    });
    const [name, setName] = useState(() => {
        return localStorage.getItem('name') || 'Dachiikk';
    });

    const updateProfileImage = (newImage: string) => {
        setProfileImage(newImage);
        localStorage.setItem('profileImage', newImage);
    };

    const updateName = (newName: string) => {
        setName(newName);
        localStorage.setItem('name', newName);
    };

    return {
        profileImage,
        name,
        updateProfileImage,
        updateName,
    };
}
