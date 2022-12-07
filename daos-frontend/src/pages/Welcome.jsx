import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import PTag from "../components/atoms/PTag";
import Illustration from "../img/welcome-illustration.svg";
import styles from "./Welcome.module.css";

export default function Welcome() {

    const profile = {
        firstName: "Hans",
    }

    return ( 
        <div className={styles.welcomeDefault}>
            <div>
                <HTag hType="h1" hColor="blue" hText={`Welcome ${profile.firstName}!`} />
                <PTag pType="normal" pColor="grey" pText="Add the instruments you can play to complete your profile." />
                <div className={styles.welcomeProfileButtonDefault}>
                    <Link to="/profile">
                        <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Show profile" />
                    </Link>
                </div>
                <Link to="/musicians">
                    <ButtonTag buttonType="normal" buttonColor="white" buttonPosition="left" buttonText="Find musician" />
                </Link>
                <Link to="/ensembles">
                    <ButtonTag buttonType="normal" buttonColor="white" buttonPosition="right" buttonText="Find ensembles" />
                </Link>
            </div>
            <img src={Illustration} alt="Illustration" />
        </div>
    );
}