import styles from "./Header.module.scss"

type Props = {
   title: string;
   icon: string;
   width: number;
   height: number;
}

 const Header = ({title, icon, width, height}: Props) => {
    return (
        <div className={styles.headingCont}>
            <h5 className={styles.heading}>{title}</h5>
            <img src={`icons/${icon}.svg`} alt="icon" className={styles.icon} width={width} height={height}/>
        </div>
    )
}


export default Header;