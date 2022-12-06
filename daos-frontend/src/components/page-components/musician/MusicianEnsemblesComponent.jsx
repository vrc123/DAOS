import styles from "./MusicianEnsemblesComponent.module.css";
import MusicianEnsemblesList from "./MusicianEnsemblesList";

export default function MusicianEnsemblesComponent({userEnsembles}) {

    return ( 
        <div className={styles.musicianEnsemblesComponentDefault}>
            {userEnsembles.map((ensemble, index) => {
                return (
                    <MusicianEnsemblesList key={index} ensemble={ensemble} />
                );
            })}
        </div>
    );
}