import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import styles from "./MusicianInfoContactButtons.module.css";

export default function MusicianInfoContactButtons({musician}) {

    return ( 
        <div className={styles.musicianInfoContactButtonsDefault}>
            <Link to="#">
                <ButtonTag buttonType="normal" buttonColor="white" buttonPosition="left" buttonText={musician.phone} />
            </Link>
            <Link to="#">    
                <ButtonTag buttonType="normal" buttonColor="white" buttonPosition="right" buttonText={musician.email} />
            </Link>
        </div>
    );
}