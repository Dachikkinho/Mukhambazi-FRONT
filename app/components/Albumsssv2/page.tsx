'use client'
import MyComponentv2 from "./Songs/page";

import styles from "./page.module.scss"


export const Albumsssv2 = () => {

    

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.SearchBar}>
                        
                    </div>
                    <h2 className={styles.heading}></h2>
                </div>
            <MyComponentv2 />
            </div>


        </>

    )
}

export default Albumsssv2;