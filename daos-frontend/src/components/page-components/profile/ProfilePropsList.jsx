import ProfileDescription from "./ProfileDescription";
import ProfileEnsembles from "./ProfileEnsembles";
import ProfileInstruments from "./ProfileInstruments";
import styles from "./ProfilePropsList.module.css";

export default function ProfilePropsList({profile, ensembles}) {

    return ( 
        <div className={styles.profilePropsListDefault}>
            <ProfileDescription profile={profile} />
            <ProfileInstruments profile={profile} />
            <ProfileEnsembles ensembles={ensembles} />
        </div>
    );
}