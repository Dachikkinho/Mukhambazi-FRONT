import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { RecoilWrap } from './components/RecoilWrap/RecoilWrap';
import './styles/MainPlayer.scss';
import { AuthProvider } from '@/app/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Chakrulos - Web Player: Music for everyone',
    description:
        'Chakrulos is a digital music service that gives you access to millions of songs.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="author" content="chakrulos.ge" />
                <meta property="og:image" content="/logo.png" />
                <meta
                    property="og:title"
                    content="Chakrulos - Web Player: Music for everyone"
                />
                <meta
                    property="og:description"
                    content="Chakrulos is a digital music service that gives you access to millions of songs."
                />
                <meta
                    property="twitter:title"
                    content="Chakrulos is a digital music service that gives you access to millions of songs."
                />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className}>
                <AuthProvider>
                    <RecoilWrap>{children}</RecoilWrap>
                </AuthProvider>
            </body>
        </html>
    );
}
