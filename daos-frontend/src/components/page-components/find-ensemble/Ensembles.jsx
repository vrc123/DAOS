import ButtonTag from "../../atoms/ButtonTag";
import EnsembleList from "./EnsembleList";
import styles from "./Ensembles.module.css";
import NoMoreResultsEnsemble from "./NoMoreResultsEnsemble";

export default function Ensembles({ensembles, visibleEnsembles, showMoreEnsembles}) {
    return (
        <div className={styles.ensemblesDefault}>
            <EnsembleList ensembles={ensembles} visibleEnsembles={visibleEnsembles} />
            {!(visibleEnsembles > ensembles.length || visibleEnsembles == ensembles.length) && <ButtonTag buttonFunction={showMoreEnsembles} buttonType="normal" buttonColor="white" buttonText="Show more"/>}
            {(visibleEnsembles > ensembles.length || visibleEnsembles == ensembles.length) && <NoMoreResultsEnsemble />}
        </div>
    );
}