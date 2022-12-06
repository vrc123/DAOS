import styles from "./MusicianInstrumentGenreComponent.module.css";

export default function MusicianInstrumentGenreComponent({genre}) {
    return (
        <div className={styles.musicianInstrumentGenreComponentDefault}>
            {genre}
        </div>
    );
}