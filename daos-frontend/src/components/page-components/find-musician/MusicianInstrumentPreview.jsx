import MusicianInstrumentGenreList from "../../others/MusicianInstrumentGenreList";
import styles from "./MusicianInstrumentPreview.module.css";
import MusicianInstrumentPreviewInfo from "./MusicianInstrumentPreviewInfo";

export default function MusicianInstrumentPreview({instrument}) {
    return (
        <div className={styles.musicianInstrumentPreviewDefault}>
            <MusicianInstrumentPreviewInfo instrument={instrument} />
            <MusicianInstrumentGenreList genreList={instrument} />
        </div>
    );
}