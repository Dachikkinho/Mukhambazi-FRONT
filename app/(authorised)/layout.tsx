'use client';
import { useRecoilState } from 'recoil';
import { HamburgerMenu } from '../components/HamburgerMenu/HamburgerMenu';
import MainPlayer from '../components/MainPlayer/MainPlayer';
import { RightSideBar } from '../components/RightSideBar/RightSideBar';
import { SideBar } from '../components/SideBar/SideBar';
import { sideBarOpenState } from '../states';
import { useEffect } from 'react';

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
