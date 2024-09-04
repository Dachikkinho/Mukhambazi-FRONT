import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/AuthContext';

const useRedirectIfAuthenticated = (redirectTo: string) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            router.push(redirectTo);
        }
    }, [isAuthenticated, router, redirectTo]);
};

export default useRedirectIfAuthenticated;
