import MusicianInstrument from "./MusicianInstrument";
import styles from "./MusicianInstrumentsComponent.module.css";

export default function MusicianInstrumentsComponent({musician}) {

    return ( 
        <div className={styles.musicianInstrumentsComponentDefault}>
            {musician.instruments.map((instrument, index) => {
                return (
                    <MusicianInstrument key={index} instrument={instrument} />
                );
            })}
        </div>
    );
}