import styles from "./FooterLogo.module.css";
import Logo from "../../img/footer-logo.webp";
import PTag from "../atoms/PTag";

export default function FooterLogo() {
    return (
        <div className={styles.footerLogoDefault}>
            <PTag pType="small" pColor="black" pText="BRAGT TIL DIG AF" />
            <img src={Logo} alt="Logo" />
        </div>
    );
}