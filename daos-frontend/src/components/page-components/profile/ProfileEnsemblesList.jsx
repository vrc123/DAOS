import styles from "./ProfileEnsemblesList.module.css";
import ProfileEnsemblePreview from "./ProfileEnsemblePreview";

export default function ProfileEnsemblesList({ensembles}) {

    return ( 
        <div className={styles.profileEnsemblesListDefault}>
            {ensembles.map((ensemble, index) => {
                return (
                    <ProfileEnsemblePreview key={index} ensemble={ensemble} />
                );
            })}
        </div>
    );
}