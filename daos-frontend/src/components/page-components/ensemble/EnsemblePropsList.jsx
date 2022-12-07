import EnsembleContactPerson from "./EnsembleContactPerson";
import EnsembleCurrentPosts from "./EnsembleCurrentPosts";
import EnsembleInfoMore from "./EnsembleInfoMore";
import styles from "./EnsemblePropsList.module.css";

export default function EnsemblePropsList({ensemble, admin}) {

    return ( 
        <div className={styles.ensemblePropsListDefault}>
            <EnsembleInfoMore ensemble={ensemble} />
            <EnsembleContactPerson admin={admin} />
            <EnsembleCurrentPosts ensemble={ensemble} />
        </div>
    );
}