import EnsembleInfo from "../components/page-components/ensemble/EnsembleInfo";
import EnsemblePropsList from "../components/page-components/ensemble/EnsemblePropsList";
import styles from "./Ensemble.module.css";

export default function Ensemble() {

    const ensemble = {
        name: "Jens' orkester",
        zipCode: "2000",
        city: "Copenhagen",
        activeMusicians: "10-20",
        description: "Hej vi er",
        practiceFrequency: "1 gang om ugen",
        admin: "1",
        continuously: false,
        projectBased: true,
        website: "https://www.dr.dk/",
        genre: ["Rock", "Classic"],
        posts: [
            {
                title: "Band søger noget der kan sparke røv på en scene",
                instrument: "Bass",
                minimumSkillLevel: "2+",
                genre: ["Rock", "Classic"],
            },
            {
                title: "Band søger",
                instrument: "Bass",
                minimumSkillLevel: "2+",
                genre: ["Rock", "Classic"],
            },
            {
                title: "Band søger",
                instrument: "Bass",
                minimumSkillLevel: "2+",
                genre: ["Rock", "Classic"],
            },
        ],
        admin : {
            _id: "1",
            firstName: "Hans",
            lastName: "Hansen",
            city: "Copenhagen",
            instruments: [
                {
                    instrumentName: "Bass",
                    skillLevel: "1",
                    genre: ["Rock", "Classic"],
                },
                {
                    instrumentName: "Bass",
                    skillLevel: "1",
                    genre: ["Rock", "Classic"],
                },
            ],
        }
    }


    const musician = {
        _id: "1",
        firstName: "Hans",
        lastName: "Hansen",
        city: "Copenhagen",
        instruments: [
            {
                instrumentName: "Bass",
                skillLevel: "1",
                genre: ["Rock", "Classic"],
            },
            {
                instrumentName: "Bass",
                skillLevel: "1",
                genre: ["Rock", "Classic"],
            },
        ],
    }

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
        <div className={styles.ensembleDefault}>
            <EnsembleInfo ensemble={ensemble} />
            <EnsemblePropsList ensemble={ensemble} theEnsemblePlays={theEnsemblePlays} musician={musician} />
        </div>
    );
}