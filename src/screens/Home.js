import React, {useEffect, useState} from 'react'
import axios from "axios";
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import {Link} from "react-router-dom";

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
                <Col className={'m-1 p-0'} >
                <Card style={{ width: '300px' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{movie.title.slice(0, 20)} </Card.Title>
                        <Card.Text>
                            {movie.overview.slice(0, 50)}
                        </Card.Text>
                        <Link to={`/${movie.id}`}>
                            <Button variant="primary">자세히 보기</Button>
                        </Link>

                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
    );
};

export default Home;