import React, {useEffect, useState} from 'react'
import axios from "axios";
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import {Poster} from "../components";

const Home = () => {

    const [ movies, setMovies ] = useState([])

    const getData = async () => {
        try {
            const { data, status } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1')
            if (status === 200) {
                setMovies(data.results)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Container>
            <Row>
            {movies.map(movie => (
               <Poster
                   key={movie.id}
                   id={movie.id}
                   title={movie.title}
                   overview={movie.overview}
                   poster={movie.poster_path}
               />
            ))}
            </Row>
        </Container>
    );
};

export default Home;