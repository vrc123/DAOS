import styles from "./MusicianEnsemblesComponent.module.css";
import MusicianEnsemblesList from "./MusicianEnsemblesList";

export default function MusicianEnsemblesComponent({musicianEnsembles}) {

    return ( 
        <div className={styles.musicianEnsemblesComponentDefault}>
            {musicianEnsembles.map((musicianEnsemble, index) => {
                return (
                    <MusicianEnsemblesList key={index} musicianEnsemble={musicianEnsemble} />
                );
            })}
        </div>
    );
}