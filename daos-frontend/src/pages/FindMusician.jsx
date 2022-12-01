import { useState } from "react";
import MusicianFilter from "../components/others/MusicianFilter";
import Musicians from "../components/others/Musicians";

export default function FindMusician() {

    const musicians = [
        {
            _id: "1",
            firstName: "Hans",
            lastName: "Hansen",
            city: "Copenhagen",
        },
        {
            _id: "2",
            firstName: "Jens",
            lastName: "Jensen",
            city: "Hvidovre",
        },
        {
            _id: "3",
            firstName: "Hans",
            lastName: "Hans",
            city: "Copenhagen",
        },
        {
            _id: "4",
            firstName: "Jens",
            lastName: "Jensen",
            city: "Hvidovre",
        },
        {
            _id: "5",
            firstName: "Hans",
            lastName: "Hans",
            city: "Copenhagen",
        },
        {
            _id: "6",
            firstName: "Jens",
            lastName: "Jensen",
            city: "Hvidovre",
        },
        {
            _id: "7",
            firstName: "Hans",
            lastName: "Hans",
            city: "Copenhagen",
        },
        {
            _id: "8",
            firstName: "Jens",
            lastName: "Jensen",
            city: "Hvidovre",
        },
        {
            _id: "9",
            firstName: "Hans",
            lastName: "Hans",
            city: "Copenhagen",
        },
        {
            _id: "10",
            firstName: "Jens",
            lastName: "Jensen",
            city: "Hvidovre",
        },
        {
            _id: "11",
            firstName: "Hans",
            lastName: "Hans",
            city: "Copenhagen",
        },
        {
            _id: "12",
            firstName: "Jens",
            lastName: "Jensen",
            city: "Hvidovre",
        },
        {
            _id: "13",
            firstName: "Hans",
            lastName: "Hans",
            city: "Copenhagen",
        },
        {
            _id: "14",
            firstName: "Jens",
            lastName: "Jensen",
            city: "Hvidovre",
        },
        {
            _id: "15",
            firstName: "Hans",
            lastName: "Hans",
            city: "Copenhagen",
        },
        {
            _id: "16",
            firstName: "Jens",
            lastName: "Jensen",
            city: "Hvidovre",
        },
        {
            _id: "17",
            firstName: "Hans",
            lastName: "Hans",
            city: "Copenhagen",
        },
        {
            _id: "18",
            firstName: "Jens",
            lastName: "Jensen",
            city: "Hvidovre",
        }
    ];
    
    let visibleMusiciansStart = 0;

    if(screen.width < 428 ) {
        visibleMusiciansStart = 6;
    } else {
        visibleMusiciansStart = 12;
    }

    const [visibleMusicians, setVisibleMusicians] = useState(visibleMusiciansStart);

    function showMoreMusicians() {
        setVisibleMusicians(visibleMusicians + visibleMusiciansStart);
    }

    return ( 
        <div className='find-musician'>
            <MusicianFilter musicians={musicians} />
            <Musicians musicians={musicians} visibleMusicians={visibleMusicians} showMoreMusicians={showMoreMusicians} />
        </div>
    );
}