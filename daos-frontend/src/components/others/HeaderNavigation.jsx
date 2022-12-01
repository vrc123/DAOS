import { Link } from "react-router-dom";
import ButtonTag from "../atoms/ButtonTag";
import LabelTag from "../atoms/LabelTag";
import styles from "./HeaderNavigation.module.css";

export default function HeaderNavigation() {
    return (
        <div className={styles.headerNavigationDefault}>
            <nav>
                <Link to="/">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Home" />
                </Link>
                <Link to="/musicians">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Find musician" />
                </Link>
                <Link to="/ensembles">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Find ensembles" />
                </Link>
                <Link to="/profile">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Profile" />
                </Link>
            </nav>
            <Link to="/sign-up">
                <ButtonTag buttonType="normal" buttonColor="blue" buttonPosition="left" buttonText="Sign up" />
            </Link>
            <Link to="/login">
                <ButtonTag buttonType="normal" buttonColor="white" buttonPosition="right" buttonText="Login" />
            </Link>
        </div>
    );
}