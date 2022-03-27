import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Poster = ({title, overview, id, poster}) => {
    return (
        <Col className={'m-1 p-0'} >
            <Card style={{ width: '300px' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster}`} />
                <Card.Body>
                    <Card.Title>{title.slice(0, 20)} </Card.Title>
                    <Card.Text>
                        {overview.slice(0, 50)}
                    </Card.Text>
                    <Link to={`/${id}`}>
                        <Button variant="primary">자세히 보기</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Poster;