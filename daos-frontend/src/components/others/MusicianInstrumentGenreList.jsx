import MusicianInstrumentGenreComponent from "./MusicianInstrumentGenreComponent";
import styles from "./MusicianInstrumentGenreList.module.css";

export default function MusicianInstrumentGenreList({genreList}) {
    return (
        <div className={styles.musicianInstrumentGenreListDefault}>
            {genreList.genre.map((genre, index) => {
                return (
                    <MusicianInstrumentGenreComponent Preview key={index} genre={genre} />
                );
            })}
        </div>
    );
}