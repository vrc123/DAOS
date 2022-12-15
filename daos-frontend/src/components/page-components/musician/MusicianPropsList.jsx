import MusicianDescription from "./MusicianDescription";
import MusicianInstruments from "./MusicianInstruments";
import MusicianEnsembles from "./MusicianEnsembles";
import styles from "./MusicianPropsList.module.css";

export default function MusicianPropsList({musician, musicianEnsembles}) {

    return ( 
        <div className={styles.musicianPropsListDefault}>
            <MusicianDescription musician={musician} />
            <MusicianInstruments musician={musician} />
            <MusicianEnsembles musicianEnsembles={musicianEnsembles} />
        </div>
    );
}