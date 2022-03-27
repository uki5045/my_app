import React from 'react';
import { useParams } from "react-router-dom";

const Detail = () => {

    const params = useParams()

    return (
        <div>
            <h1>{params.movieId}</h1>
        </div>
    );
};

export default Detail;