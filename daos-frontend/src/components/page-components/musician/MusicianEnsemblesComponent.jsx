import styles from "./MusicianEnsemblesComponent.module.css";
import MusicianEnsemblesList from "./MusicianEnsemblesList";

export default function MusicianEnsemblesComponent({ensembles}) {

    return ( 
        <div className={styles.musicianEnsemblesComponentDefault}>
            {ensembles.map((ensemble, index) => {
                return (
                    <MusicianEnsemblesList key={index} ensemble={ensemble} />
                );
            })}
        </div>
    );
}