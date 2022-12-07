import MusicianDescription from "./MusicianDescription";
import MusicianInstruments from "./MusicianInstruments";
import MusicianEnsembles from "./MusicianEnsembles";
import styles from "./MusicianPropsList.module.css";

export default function MusicianPropsList({ensembles}) {

    let musician;

    ensembles.forEach(ensemble => {
        musician = ensemble.admin;
    })

    return ( 
        <div className={styles.musicianPropsListDefault}>
            <MusicianDescription musician={musician} />
            <MusicianInstruments musician={musician} />
            <MusicianEnsembles ensembles={ensembles} />
        </div>
    );
}