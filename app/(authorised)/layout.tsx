'use client';
import { useRecoilState } from 'recoil';
import { HamburgerMenu } from '../components/HamburgerMenu/HamburgerMenu';
import MainPlayer from '../components/MainPlayer/MainPlayer';
import { RightSideBar } from '../components/RightSideBar/RightSideBar';
import { SideBar } from '../components/SideBar/SideBar';
import { sideBarOpenState } from '../states';
import { useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const sideBarOpen = useRecoilState(sideBarOpenState)[0];

    useEffect(() => {
        if (sideBarOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'scroll';
            };
        }
    }, [sideBarOpen]);
    
    const router = useRouter();
    const { logout } = useAuth();

    const fetcher = async (url: string) => {
        const jwt = localStorage.getItem('user');
        const { data } = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        if (data.blocked) {
            logout();
            router.push('/login');
        }

        return data;
    };

    useSWR('https://back.chakrulos.ge/users/me', fetcher, {
        refreshInterval: 1000,
    });

    return (
        <>
            <div className={`main-components-container`}>
                <SideBar />
                <HamburgerMenu />
                <div className="children-container">{children}</div>
                <RightSideBar />
            </div>
            <MainPlayer />
        </>
    );
}
