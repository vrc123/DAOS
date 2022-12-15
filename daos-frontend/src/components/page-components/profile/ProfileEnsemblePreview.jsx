import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import styles from "./ProfileEnsemblePreview.module.css";
import ProfileEnsemblePreviewInfo from "./ProfileEnsemblePreviewInfo";
import ProfileEnsemblePreviewPostsInfo from "./ProfileEnsemblePreviewPostsInfo";
//import EnsemblePreviewInfo from "./EnsemblePreviewInfo";
//import EnsemblePreviewPostsInfo from "./EnsemblePreviewPostsInfo";

export default function ProfileEnsemblePreview({ensemble}) {
    return (
        <div className={styles.profileEnsemblePreviewDefault}>
            <ProfileEnsemblePreviewInfo ensemble={ensemble} />
            <div>
                <Link to={`/profile/ensembles/${ensemble._id}/edit`}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Edit" />
                </Link>
                <ButtonTag buttonType="small" buttonColor="white" buttonText="Delete" />
            </div>
            <ProfileEnsemblePreviewPostsInfo ensemble={ensemble} />
{/*

            <Link to="/profile/ensembles/:id/posts/add">
                <ButtonTag buttonType="small" buttonColor="white" buttonText="Add" />
            </Link>
            <div>
                <Link to="/profile/ensembles/:id/posts/:postId/edit">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Edit" />
                </Link>
                <ButtonTag buttonType="small" buttonColor="white" buttonText="Delete" />
            </div>
*/}
        </div>
    );
}