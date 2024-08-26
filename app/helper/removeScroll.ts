import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { popUpOpenState } from '../states';

export function RemoveScroll() {
    const popUpOpen = useRecoilState(popUpOpenState)[0];
    useEffect(() => {
        if (popUpOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'scroll';
            };
        }
    }, [popUpOpen]);
}
