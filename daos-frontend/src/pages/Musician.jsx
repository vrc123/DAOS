import MusicianInfo from "../components/page-components/musician/MusicianInfo";
import styles from "./Musician.module.css";
import MusicianPropsList from "../components/page-components/musician/MusicianPropsList";

export default function Musician() {

    const musician = {
        _id: "1",
        firstName: "Hans",
        lastName: "Hansen",
        city: "Copenhagen",
        status: true,
        description: "Hej jeg hedder",
        phone: "12345678",
        email: "hej@hej.dk",
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

    const ensembles = [
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            admin: "1"
        },
        {
              name: "Jens' orkester",
            city: "Hviovre",
            activeMusicians: "20 stykker",
            admin: "1"
        },
        {
            name: "Jens' orkester",
            city: "Hviovre",
            activeMusicians: "20 stykker",
            admin: "2"
        },
        {
            name: "Jens' orkester",
            city: "Hviovre",
            activeMusicians: "20 stykker",
            admin: "1"
        },
        {
            name: "Jens' orkester",
            city: "Hviovre",
            activeMusicians: "20 stykker",
            admin: "1"
        },
    ];

    if (musician.phone) {
        musician.phone = "+45" + " " + musician.phone.slice(0,2) + " " + musician.phone.slice(2,4) + " " + musician.phone.slice(4,6) + " " + musician.phone.slice(6,8);
    }

    const userEnsembles = ensembles.filter((ensemble) => ensemble.admin == musician._id);

    return ( 
        <div className={styles.musicianDefault}>
            <MusicianInfo musician={musician} />
            <MusicianPropsList musician={musician} userEnsembles={userEnsembles} />
        </div>
    );
}