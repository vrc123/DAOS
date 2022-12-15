import ProfileInstrumentPreviewInfo from "./ProfileInstrumentPreviewInfo";
import MusicianInstrumentGenreList from "../../others/MusicianInstrumentGenreList";
import styles from "./ProfileInstrumentPreview.module.css";
import ButtonTag from "../../atoms/ButtonTag";
import { Link } from "react-router-dom";

export default function ProfileInstrumentPreview({instrument}) {
    return (
        <div className={styles.profileInstrumentPreviewDefault}>
            <ProfileInstrumentPreviewInfo instrument={instrument} />
            <MusicianInstrumentGenreList genreList={instrument} />
            <div>
                <Link to={`/profile/instruments/${instrument._id}/edit"`}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Edit" />
                </Link>
                <ButtonTag buttonType="small" buttonColor="white" buttonText="Delete" />
            </div>
        </div>
    );
}