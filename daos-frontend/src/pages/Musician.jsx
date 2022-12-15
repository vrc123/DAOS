import styles from "./Musician.module.css";
import MusicianPropsList from "../components/page-components/musician/MusicianPropsList";
import { useParams } from "react-router-dom";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import { useState, useEffect } from "react";
import MusicianInfo from "../components/page-components/musician/MusicianInfo";

export default function Musician() {
    const { id } = useParams();

    const [musician, setMusician] = useState(null);
    const [musicianEnsembles, setMusicianEnsembles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/profiles/" + id)
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Could not fetch the data!")
            }
            return res.json();
        })
        .then((data) => {
            setMusician(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });

        fetch("http://127.0.0.1:3000/ensembles/musician/" + id)
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Could not fetch the data!")
            }
            return res.json();
        })
        .then((data) => {
            setMusicianEnsembles(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });

    }, []);

    return ( 
        <div className={styles.musicianDefault}>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {musician && <MusicianInfo musician={musician} />}
            {musician && <MusicianPropsList musician={musician} musicianEnsembles={musicianEnsembles} />}
        </div>
    );
}