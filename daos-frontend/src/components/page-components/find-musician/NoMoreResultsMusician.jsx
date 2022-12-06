import { Link } from "react-router-dom";
import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";
import Illustration from "../../../img/no-more-results.svg";
import styles from "./NoMoreResultsMusician.module.css";
import ButtonTag from "../../atoms/ButtonTag";

export default function NoMoreResultsMusician() {
    return (
        <div className={styles.noMoreResultsMusicianDefault}>
            <img src={Illustration} alt="Illustration" />
            <div>
                <HTag hType="h3" hColor="blue" hText="Didn't find the right one to play with?" />
                <PTag pType="normal" pColor="grey" pText='Customize your search or update your profile so your status is set to "looking" if you haven"t done so, so others can find you!' />
                <Link to="#">
                    <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Edit profile" />
                </Link>
            </div>
        </div>
    );
}