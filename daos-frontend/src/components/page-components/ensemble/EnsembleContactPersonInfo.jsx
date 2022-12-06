import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./EnsembleContactPersonInfo.module.css";

export default function EnsembleContactPersonInfo({musician}) {

    return ( 
        <div className={styles.ensembleContactPersonInfoDefault}>
            <div>
                <HTag hType="h3" hColor="red" hText={`${musician.firstName} ${musician.lastName}`} />
                <LabelTag labelType="small" labelColor="grey" labelText={musician.city} />
            </div>
            <Link to="#">
                <ButtonTag buttonType="small" buttonColor="white" buttonText="Show profile" />
            </Link>
        </div>
    );
}