'use client';

import styles from './page.module.scss';
import { useEffect } from 'react';

const NatusVincere = () => {
    useEffect(() => {
        document.title = 'Natus Vincere';
    }, []);

    return (
        <div className={styles.main}>
            <iframe
                className={styles.iframe}
                src="https://www.youtube.com/embed/dljEsdqWm_c?si=z2miv7UeNOCQ1uSw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default NatusVincere;
