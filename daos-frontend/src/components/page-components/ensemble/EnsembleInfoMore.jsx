import LabelTag from "../../atoms/LabelTag";
import PTag from "../../atoms/PTag";
import MusicianInstrumentGenreList from "../../others/MusicianInstrumentGenreList";
import styles from "./EnsembleInfoMore.module.css";

export default function EnsembleInfoMore({ensemble}) {

    let theEnsemblePlays;

    if (ensemble.continuously === true && ensemble.projectBased === true) {
        
        theEnsemblePlays = "Continuously and projectbased";

    } else if (ensemble.continuously === true && ensemble.projectBased === false) {

        theEnsemblePlays = "Continuously";

    } else if (ensemble.continuously === false && ensemble.projectBased === true) {

        theEnsemblePlays = "Projectbased";

    } else {

        theEnsemblePlays = "";

    }

    return ( 
        <div className={styles.ensembleInfoMoreDefault}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            <PTag pType="normal" pColor="grey" pText={ensemble.description} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Active musicians" />
            <PTag pType="normal" pColor="grey" pText={ensemble.activeMusicians} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Practice frequency" />
            <PTag pType="normal" pColor="grey" pText={ensemble.practiceFrequency} />
            <LabelTag labelType="normal" labelColor="blue" labelText="The ensemble plays.." />
            <PTag pType="normal" pColor="grey" pText={theEnsemblePlays} />
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
                <MusicianInstrumentGenreList genreList={ensemble} />            
            </div>
        </div>
    );
}