import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { popUpOpenState } from "../states";

export function removeScroll() {
    const [popUpOpen, setPopUpOpen] = useRecoilState(popUpOpenState);
    useEffect(() => {
        if (popUpOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'scroll';
            };
        }
    }, [popUpOpen]);
}