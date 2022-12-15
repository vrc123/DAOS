import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import PTag from "../../atoms/PTag";
import styles from "./EnsembleCurrentPostInfo.module.css";
import EnsembleCurrentPostInfoInstrument from "./EnsembleCurrentPostInfoInstrument";

export default function EnsembleCurrentPostInfo({ensemble, post}) {
    return (
        <div className={styles.ensembleCurrentPostInfo}>
            <EnsembleCurrentPostInfoInstrument post={post} />
            <PTag pType="normal" pColor="grey" pText={post.title} />
            <Link to={`/ensembles/${ensemble._id}/posts/${post._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show post" />
            </Link>
        </div>
    );
}