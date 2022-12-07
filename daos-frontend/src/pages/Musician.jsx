import MusicianInfo from "../components/page-components/musician/MusicianInfo";
import styles from "./Musician.module.css";
import MusicianPropsList from "../components/page-components/musician/MusicianPropsList";
import { useParams } from "react-router-dom";
import useFetch from "../scripts/useFetch";

export default function Musician() {
    const { id } = useParams()

    const { data: ensembles, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles/admin/" + id);

    return ( 
        <div className={styles.musicianDefault}>
            {isLoading && <div>Loading...</div>}
            {error && <Error error={error} />}
            {ensembles && <MusicianInfo ensembles={ensembles} />}
            {ensembles && <MusicianPropsList ensembles={ensembles} />}
        </div>
    );
}