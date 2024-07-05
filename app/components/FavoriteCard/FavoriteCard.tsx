import styles from "./FavoriteCard.module.scss";

type Props = {
    title: string;
    banner: string;
    icon: string;
    
}

export default function FavoriteCard(props: Props) {
  return (
        <div className={styles.Container}>
             <img src={props.banner} alt="pfp" width={180} height={180} />
             <div className={styles.Name}>
                <div>
                  <h4>{props.title}</h4>
                </div>
                <img src={props.icon} alt="pfp" width={24} height={24} />
             </div>
        </div>
  );
}
