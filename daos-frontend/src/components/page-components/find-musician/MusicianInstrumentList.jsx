import MusicianInstrumentPreview from "./MusicianInstrumentPreview"
import styles from "./MusicianInstrumentList.module.css";

export default function MusicianInstrumentList({musician}) {
    return (
        <div className={styles.musicianInstrumentListDefault}>
            {musician.instruments.map((instrument, index) => {
                return (
                    <MusicianInstrumentPreview key={index} instrument={instrument} />
                );
            })}
        </div>
    );
}