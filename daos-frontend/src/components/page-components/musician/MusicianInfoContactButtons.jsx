import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import styles from "./MusicianInfoContactButtons.module.css";

export default function MusicianInfoContactButtons({musician}) {

    return ( 
        <div className={styles.musicianInfoContactButtonsDefault}>
            {musician.phone && <Link to="#">
                <ButtonTag buttonType="normal" buttonColor="white" buttonText={musician.phone} />
            </Link>}
            {musician.email && <div></div>}
            {musician.email && <Link to="#">    
                <ButtonTag buttonType="normal" buttonColor="white" buttonText={musician.email} />
            </Link>}
        </div>
    );
}