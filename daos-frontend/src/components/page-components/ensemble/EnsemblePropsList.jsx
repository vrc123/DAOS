import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import LabelTag from "../../atoms/LabelTag";
import PTag from "../../atoms/PTag";
import MusicianInstrumentGenreList from "../../others/MusicianInstrumentGenreList";
import EnsembleContactPerson from "./EnsembleContactPerson";
import EnsembleCurrentPosts from "./EnsembleCurrentPosts";
import EnsembleInfoMore from "./EnsembleInfoMore";
import styles from "./EnsemblePropsList.module.css";

export default function EnsemblePropsList({ensemble, theEnsemblePlays, musician}) {

    return ( 
        <div className={styles.ensemblePropsListDefault}>
            <EnsembleInfoMore ensemble={ensemble} theEnsemblePlays={theEnsemblePlays} />
            <EnsembleContactPerson musician={musician} />
            <EnsembleCurrentPosts ensemble={ensemble} />
        </div>
    );
}