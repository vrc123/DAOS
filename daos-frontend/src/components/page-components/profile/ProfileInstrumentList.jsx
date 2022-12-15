import styles from "./ProfileInstrumentList.module.css";
import ProfileInstrumentPreview from "./ProfileInstrumentPreview";

export default function ProfileInstrumentList({profile}) {

    return (
        <div className={styles.profileInstrumentListDefault}>
            {profile.instruments.map((instrument, index) => {
                return (
                    <ProfileInstrumentPreview key={index} instrument={instrument} />
                );
            })}
            
        </div>
    );
}