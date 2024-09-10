'use clients';

import axios from 'axios';
import styles from './DeletePopUp.module.scss';
import { useRouter } from 'next/navigation';

type Props = {
    name: string;
    section: string;
    open: boolean;
    closeFunc: () => void;
    deleteString: string;
    confirm: () => void;
};

const DeletePopUp = ({
    name,
    section,
    open,
    closeFunc,
    deleteString,
    confirm,
}: Props) => {
    const router = useRouter();

    function deleteBackend() {
        axios
            .delete(deleteString)
            .then(() => {
                router.push('/playlist');

                confirm();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            {open && (
                <>
                    <div className={styles.overlay} onClick={closeFunc}></div>

                    <div className={styles.container}>
                        <p className={styles.text}>
                            Are you sure you want to delete {name} from{' '}
                            {section}?
                        </p>
                        <div className={styles.buttons}>
                            <button
                                className={`${styles.button} ${styles.no}`}
                                onClick={closeFunc}
                            >
                                no
                            </button>
                            <button
                                className={`${styles.button} ${styles.yes}`}
                                onClick={deleteBackend}
                            >
                                yes
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default DeletePopUp;