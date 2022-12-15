import { useParams } from "react-router-dom";
import Error from "../components/others/Error";
import Loading from "../components/others/Loading";
import EnsembleInfo from "../components/page-components/ensemble/EnsembleInfo";
import EnsemblePropsList from "../components/page-components/ensemble/EnsemblePropsList";
import useFetch from "../scripts/useFetch";
import styles from "./Ensemble.module.css";

export default function Ensemble() {

    const { id } = useParams();

    const { data: ensemble, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles/" + id);

    return ( 
        <div className={styles.ensembleDefault}>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {ensemble && <EnsembleInfo ensemble={ensemble} />}
            {ensemble && <EnsemblePropsList ensemble={ensemble} admin={ensemble.admin} />}
        </div>
    );
}