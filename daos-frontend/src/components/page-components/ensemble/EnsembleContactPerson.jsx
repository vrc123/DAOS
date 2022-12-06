import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./EnsembleContactPerson.module.css";
import EnsembleContactPersonInfo from "./EnsembleContactPersonInfo";

export default function EnsembleContactPerson({musician}) {

    return ( 
        <div className={styles.ensembleContactPersonDefault}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Contact person" />
            <EnsembleContactPersonInfo musician={musician} />
        </div>
    );
}