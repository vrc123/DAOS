import MusicianInstrumentInfo from "./MusicianInstrumentInfo";
import styles from "./MusicianInstrument.module.css";
import MusicianInstrumentGenreList from "../../others/MusicianInstrumentGenreList";

export default function MusicianInstrument({instrument}) {
    return (
        <div className={styles.musicianInstrumentDefault}>
            <MusicianInstrumentInfo instrument={instrument} />
            <MusicianInstrumentGenreList genreList={instrument} />
        </div>
    );
}