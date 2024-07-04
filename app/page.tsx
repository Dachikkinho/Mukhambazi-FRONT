
import styles from "./page.module.css";
import TopHits from "./TopHits/TopHits";





export default function Home() {
  return (
    // Droebit aris ase sanam backidan mivigebt informacias ase ar ikneba rodesac infos mivigebt backidan
    //sxvanairad shemovitant informacias aseve homepageze ase ar davwert gadavmapavt ubraldo raxan axla 
    //erti componenti udna shemekmna ase gadavwkvite

    <main className={styles.main}>

     <TopHits bgColor={"rgb(88 54 118)"} name={"Irakli Charkviani"} plays={"32.890K"} pfp={"ika"} />
     <TopHits bgColor={"rgb(88 54 118)"} name={"Irakli Charkviani"} plays={"32.890"} pfp={"ika"} />
     <TopHits bgColor={"rgb(88 54 118)"} name={"Irakli Charkviani"} plays={"32.890"} pfp={"ika"} />
      

    </main>
  );
}
