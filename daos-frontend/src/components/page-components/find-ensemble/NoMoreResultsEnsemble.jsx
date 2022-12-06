import { Link } from "react-router-dom";
import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";
import Illustration from "../../../img/no-more-results.svg";
import styles from "./NoMoreResultsEnsemble.module.css";
import ButtonTag from "../../atoms/ButtonTag";

export default function NoMoreResultsEnsemble() {
    return (
        <div className={styles.noMoreResultsEnsembleDefault}>
            <img src={Illustration} alt="Illustration" />
            <div>
                <HTag hType="h3" hColor="blue" hText="Didn't find an ensemble for you?" />
                <PTag pType="normal" pColor="grey" pText='Customize your search or add an ensemble yourself and make some posts, so others can find you!' />
                <Link to="#">
                    <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Add Ensemble" />
                </Link>
            </div>
        </div>
    );
}