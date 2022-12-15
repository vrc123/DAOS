import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import styles from "./ProfileEnsemblePreviewPostsInfo.module.css";
import ProfileEnsemblePreviwPost from "./ProfileEnsemblePreviwPost";

export default function ProfileEnsemblePreviewPostsInfo({ensemble}) {
    return (
        <div className={styles.profileEnsemblePreviewPostsInfo}>
            <div>
                <Link to={`/profile/ensembles/${ensemble._id}/posts/add`}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Add" />
                </Link>
            </div>
            {ensemble.posts.map((post, index) => {
                return (
                    <ProfileEnsemblePreviwPost key={index} ensemble={ensemble} post={post} />
                );
            })}
        </div>
    );
}