import LabelTag from "../../atoms/LabelTag";
import styles from "./MusicianInstruments.module.css";
import MusicianInstrumentsComponent from "./MusicianInstrumentsComponent";

export default function MusicianInstruments({musician}) {

    return ( 
        <div className={styles.musicianInstrumentsDefault}>
            <LabelTag labelType="normal" labelColor="blue" labelText={"Instruments"} />
            <MusicianInstrumentsComponent musician={musician} />
        </div>
    );
}