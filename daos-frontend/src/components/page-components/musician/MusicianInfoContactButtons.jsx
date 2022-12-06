import ButtonTag from "../../atoms/ButtonTag";
import styles from "./MusicianInfoContactButtons.module.css";

export default function MusicianInfoContactButtons({musician}) {

    return ( 
        <div className={styles.musicianInfoContactButtonsDefault}>
            <ButtonTag buttonType="normal" buttonColor="white" buttonPosition="left" buttonText={musician.phone} />
            <ButtonTag buttonType="normal" buttonColor="white"   buttonPosition="right" buttonText={musician.email} />
        </div>
    );
}