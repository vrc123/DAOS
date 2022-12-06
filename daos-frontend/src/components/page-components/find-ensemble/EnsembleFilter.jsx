import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";
import styles from "./EnsembleFilter.module.css";

export default function EnsembleFilter({ensembles}) {
    return (
        <div className={styles.ensembleFilterDefault}>
            <HTag hType="h1" hColor="blue" hText="Find Ensemble"/>
            <PTag pType="normal" pColor="grey" pText={`${ensembles.length}  posts from ensembles found`} />
        </div>
    );
}