import LabelTag from "../../atoms/LabelTag";
import PTag from "../../atoms/PTag";
import styles from "./MusicianDescription.module.css";

export default function MusicianDescription({musician}) {

    return ( 
        <div className={styles.musicianDescriptionDefault}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            </div>
            <PTag pType="normal" pColor="grey" pText={musician.description} />
        </div>
    );
}