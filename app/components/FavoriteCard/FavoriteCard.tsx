import styles from "./FavoriteCard.module.scss";

type Props = {
    title: string;
    banner: string;
    icon: string;
    width: string;
    height: string;
    
}

export default function FavoriteCard({title, banner, icon, width, height}: Props) {
  return (
        <div className={styles.Container}>
             <img src={banner} alt="pfp"/>
             <div className={styles.Name}>
                <div>
                  <h4>{title}</h4>
                </div>
                <img src={icon} alt="pfp" width={width} height={height}/>
             </div>
        </div>
  );
}


