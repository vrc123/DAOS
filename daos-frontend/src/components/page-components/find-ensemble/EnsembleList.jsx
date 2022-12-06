import styles from "./EnsembleList.module.css";
import EnsemblePreview from "./EnsemblePreview";

export default function EnsembleList({ensembles, visibleEnsembles}) {
    return (
        <div className={styles.ensembleListDefault}>
            {ensembles.slice(0, visibleEnsembles).map((ensemble, index) => {
                return (
                    <EnsemblePreview key={index} ensemble={ensemble} />
                );
            })}
        </div>
    );
}