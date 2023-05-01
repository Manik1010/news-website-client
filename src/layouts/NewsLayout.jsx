import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Share/Header/Header';
import Right from '../pages/Share/Right/Right';
import NavigationBar from '../pages/Share/Header/NavigationBar/NavigationBar';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={9}>
                        {/* <h2>Main contain is comin...</h2> */}
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <Right></Right>
                    </Col>
                </Row>
            </Container>
            {/* <Outlet></Outlet> */}

        </div>
    );
};

export default NewsLayout;