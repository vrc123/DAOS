import { useState } from "react";
import MusicianFilter from "../components/page-components/find-musician/MusicianFilter";
import Musicians from "../components/page-components/find-musician/Musicians";
import useFetch from "../scripts/useFetch";

export default function FindMusician() {

    const { data: musicians, isLoading, error } = useFetch("http://127.0.0.1:3000/profiles");

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
            {musicians && <MusicianFilter musicians={musicians} />}
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {musicians && <Musicians musicians={musicians} visibleMusicians={visibleMusicians} showMoreMusicians={showMoreMusicians} />}
        </div>
    );
}