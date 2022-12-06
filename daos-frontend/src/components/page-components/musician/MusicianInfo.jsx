import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./MusicianInfo.module.css";
import MusicianInfoContactButtons from "./MusicianInfoContactButtons";

export default function MusicianInfo({musician}) {

    if (musician.status === true) {
        musician.status = "Looking";
    } else if (musician.status === false) {
        musician.status = "Not looking";
    }

    return ( 
        <div className={styles.musicianInfoDefault}>
            <div>
                <HTag hType="h1" hColor="red" hText={`${musician.firstName} ${musician.lastName}`} />
                <LabelTag labelType="normal" labelColor="blue" labelStatus="status" labelText={musician.status} />
            </div>
            <MusicianInfoContactButtons musician={musician} />
        </div>
    );
}