import { Link, useNavigate } from "react-router-dom";
import ButtonTag from "../atoms/ButtonTag";
import LabelTag from "../atoms/LabelTag";
import styles from "./HeaderNavigation.module.css";

export default function HeaderNavigation({loggedIn, setLoggedIn}) {

    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        setLoggedIn(false);
        navigate("/");
    }

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
            {!loggedIn && <Link to="/sign-up">
                <ButtonTag buttonType="normal" buttonColor="blue" buttonPosition="left" buttonText="Sign up" />
            </Link>}
            {!loggedIn && <Link to="/login">
                <ButtonTag buttonType="normal" buttonColor="white" buttonPosition="right" buttonText="Login" />
            </Link>}
            {loggedIn && <ButtonTag buttonType="normal" buttonColor="white" buttonText="Logout" buttonFunction={logout} />}
        </div>
    );
}