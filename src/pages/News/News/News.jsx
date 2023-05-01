import React from 'react';
import {Button, Card, Container } from 'react-bootstrap';
import { useLoaderData, Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa'
import Editor from '../Editor/Editor';

const News = () => {
    const singalNews = useLoaderData();
    const {category_id, image_url, title, details} = singalNews;
    return (
        <Container>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagories/${category_id}`}> <Button variant="danger"> <FaArrowCircleLeft></FaArrowCircleLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <Editor></Editor>
        </Container>
    );
};

export default News;