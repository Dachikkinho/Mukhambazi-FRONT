import { useEffect } from 'react';
import { useAuth } from '@/app/AuthContext';
import { useRouter } from 'next/navigation';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    return <>{isAuthenticated ? children : null}</>;
};

export default PrivateRoute;
