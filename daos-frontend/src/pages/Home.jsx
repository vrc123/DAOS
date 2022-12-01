import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import Illustration from "../img/home-illustration.svg";
import styles from "./Home.module.css";

export default function Home() {
    return ( 
        <div className={styles.homeDefault}>
            <div>
                <HTag hType="h1" hColor="red" hText="The place where musicians find musicians and play music together" />
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