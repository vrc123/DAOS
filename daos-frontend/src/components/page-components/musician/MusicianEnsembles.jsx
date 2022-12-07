import LabelTag from "../../atoms/LabelTag";
import styles from "./MusicianEnsembles.module.css";
import MusicianEnsemblesComponent from "./MusicianEnsemblesComponent";

export default function MusicianEnsembles({ensembles}) {

    return ( 
        <div className={styles.musicianEnsemblesDefault}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Ensembles" />
            </div>
            <MusicianEnsemblesComponent ensembles={ensembles} />
        </div>
    );
}