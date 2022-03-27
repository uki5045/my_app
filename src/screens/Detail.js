import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const params = useParams()

    const [ movie, setMovie ] = useState({})

    const getMovie = async () => {
        try {
             const { data, status } = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`)
            if(status === 200) {
                setMovie(data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    );
};

export default Detail;