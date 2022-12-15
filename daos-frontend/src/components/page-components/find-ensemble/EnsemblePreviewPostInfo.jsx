import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import PTag from "../../atoms/PTag";
import styles from "./EnsemblePreviewPostInfo.module.css";
import EnsemblePreviwPostInfoInstrument from "./EnsemblePreviewPostInfoInstrument";

export default function EnsemblePreviwPostInfo({ensemble, post}) {

    return (
        <div className={styles.ensemblePreviwPostInfo}>
            <EnsemblePreviwPostInfoInstrument post={post} />
            <PTag pType="normal" pColor="grey" pText={post.title} />
            <Link to={`/ensembles/${ensemble._id}/posts/${post._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show post" />
            </Link>
        </div>
    );
}