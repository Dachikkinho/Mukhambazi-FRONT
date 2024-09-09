import React, { useState, useEffect } from 'react';
import styles from './Notification.module.scss';

interface NotificationProps {
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
    message,
    type,
    onClose,
}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            const closeTimer = setTimeout(() => {
                onClose();
            }, 2000);

            return () => clearTimeout(closeTimer);
        }, 20000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`${styles.notification} ${styles[type]} ${visible ? styles.show : ''}`}
        >
            {message}
        </div>
    );
};

export default Notification;
