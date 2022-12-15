import { Link } from "react-router-dom";
import HTag from "../../atoms/HTag";
import ButtonTag from "../../atoms/ButtonTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./PostEnsembleInfo.module.css";

export default function PostEnsembleInfo({ensemble}) {

    return ( 
        <div className={styles.postEnsembleInfoDefault}>
            <div>
                <HTag hType="h3" hColor="red" hText={ensemble.name}/>
                <LabelTag labelType="small" labelColor="grey" labelText={`${ensemble.city} • ${ensemble.activeMusicians}`} />
            </div>
            <Link to={`/ensembles/${ensemble._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show more" />
            </Link>
        </div>
    );
}