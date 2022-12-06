import { useState } from "react";
import EnsembleFilter from "../components/page-components/find-ensemble/EnsembleFilter";
import Ensembles from "../components/page-components/find-ensemble/Ensembles";
import useFetch from "../scripts/useFetch";

export default function FindEnsemble() {

    const { data: ensembles, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles");

    /*
    const ensembles = [
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
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
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
        {
            name: "Jens' orkester",
            city: "Copenhagen",
            activeMusicians: "20 stykker",
            posts: [
                {
                    title: "Band søger",
                    instrument: "Bass",
                    minimumSkillLevel: "2+",
                    genre: ["Rock", "Classic"],
                },
            ]
        },
    ];
    */
    
    let visibleEnsemblesStart = 0;

    if(screen.width < 428 ) {
        visibleEnsemblesStart = 6;
    } else {
        visibleEnsemblesStart = 12;
    }

    const [visibleEnsembles, setVisibleEnsembles] = useState(visibleEnsemblesStart);

    function showMoreEnsembles() {
        setVisibleEnsembles(visibleEnsembles + visibleEnsemblesStart);
    }

    return ( 
        <div className='find-ensemble'>
            {ensembles && <EnsembleFilter ensembles={ensembles} />}
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {ensembles && <Ensembles ensembles={ensembles} visibleEnsembles={visibleEnsembles} showMoreEnsembles={showMoreEnsembles} />}
        </div>
    );
}