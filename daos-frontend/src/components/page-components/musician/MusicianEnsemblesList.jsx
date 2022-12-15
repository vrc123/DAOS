import { Link } from "react-router-dom"
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";
import styles from "./MusicianEnsemblesList.module.css";

export default function MusicianEnsemblesList({musicianEnsemble}) {

    return ( 
        <div className={styles.musicianEnsemblesListDefault}>
            <div>
                <HTag hType="h3" hColor="red" hText={musicianEnsemble.name} />
                <LabelTag labelType="small" labelColor="grey" labelText={`${musicianEnsemble.city} • ${musicianEnsemble.activeMusicians}`} />
            </div>
            <Link to={`/ensembles/${musicianEnsemble._id}`}>
                <ButtonTag buttonType="small" buttonColor="white" buttonText="Show more" />
            </Link>
        </div>
    );
}