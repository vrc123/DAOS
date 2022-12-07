import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./MusicianPreviewInfo.module.css";

export default function MusicianPreviewInfo({musician}) {

    return (
        <div className={styles.musicianPreviewInfoDefault}>
            <div>
                <HTag hType="h3" hColor="red" hText={`${musician.firstName} ${musician.lastName}`}/>
                <LabelTag labelType="small" labelColor="grey" labelText={musician.city} />
            </div>
            <Link to={`/musicians/${musician._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show more" />
            </Link>
        </div>
    );
}