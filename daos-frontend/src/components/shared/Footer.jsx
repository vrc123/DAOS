import { Link } from "react-router-dom";
import FooterNavigation from "../others/FooterNavigation";
import styles from "./Footer.module.css";
import Illustration from "../../img/footer-illustration.svg";
import FooterLogo from "../others/FooterLogo";
import PTag from "../atoms/PTag";

export default function Footer() {
    return (
        <footer className={styles.footerDefault}>
            <div className={styles.footerWidgetTopDefault}>
                <FooterNavigation />
                <img src={Illustration} alt="Illustration" />
                <div>
                    <Link to="/">
                        <FooterLogo />
                    </Link>
                </div>
            </div>
            <div className={styles.footerWidgetBottomDefault}>
                <Link to="#">
                    <PTag pType="small" pColor="white" pText="Privacy policy" />
                </Link>
            </div>
        </footer>
    );
}