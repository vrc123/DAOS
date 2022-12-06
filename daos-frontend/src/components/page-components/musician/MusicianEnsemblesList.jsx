import { Link } from "react-router-dom"
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";
import styles from "./MusicianEnsemblesList.module.css";

export default function MusicianEnsemblesList({ensemble}) {

    return ( 
        <div className={styles.musicianEnsemblesListDefault}>
            <div>
                <HTag hType="h3" hColor="red" hText={ensemble.name} />
                <LabelTag labelType="small" labelColor="grey" labelText={`${ensemble.city} • ${ensemble.activeMusicians}`} />
            </div>
            <Link to={`/ensembles/${ensemble._id}`}>
                <ButtonTag buttonType="small" buttonColor="white" buttonText="Show ensemble" />
            </Link>
        </div>
    );
}