import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if(!res.ok) {
                    throw Error('Could not fetch the data')
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setError(null)
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            });
    }, [url]);

    return { data, isLoading, error }
}