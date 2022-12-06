import MusicianInstrumentList from "./MusicianInstrumentList";
import styles from "./MusicianPreview.module.css";
import MusicianPreviewInfo from "./MusicianPreviewInfo";

export default function MusicianPreview({musician}) {
    return (
        <div className={styles.musicianPreviewDefault}>
            <MusicianPreviewInfo musician={musician} />
            <MusicianInstrumentList musician={musician} />
        </div>
    );
}