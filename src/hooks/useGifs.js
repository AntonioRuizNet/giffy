import {useState, useEffect} from 'react'
import getGifs from '../services/Api'

export default function useGifs({keyword}) {

    const [gifs, setGifs] = useState({"data":[]});

    useEffect(() => {
        getGifs({ keyword: keyword }).then(gifs => setGifs(gifs))
    }, [keyword]);

    return {gifs}
}
