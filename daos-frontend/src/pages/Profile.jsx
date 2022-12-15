import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import ProfileInfo from "../components/page-components/profile/ProfileInfo";
import ProfilePropsList from "../components/page-components/profile/ProfilePropsList";
import styles from "./Profile.module.css";

export default function Profile() {

    const profileId = localStorage.getItem("profileId");

    const [profile, setProfile] = useState(null);
    const [ensembles, setEnsembles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/profiles/" + profileId)
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Could not fetch the data!")
            }
            return res.json();
        })
        .then((data) => {
            setProfile(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });

        fetch("http://127.0.0.1:3000/ensembles/musician/" + profileId)
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Could not fetch the data!")
            }
            return res.json();
        })
        .then((data) => {
            setEnsembles(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });

    }, []);

    return ( 
        <div className={styles.ensembleDefault}>
            {profile && <ProfileInfo profile={profile} />}
            {profile && <ProfilePropsList profile={profile} ensembles={ensembles} />}
        </div>
    );
}