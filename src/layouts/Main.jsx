import React from 'react';
import Header from '../pages/Share/Header/Header';
import Footer from '../pages/Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Right from '../pages/Share/Right/Right';
import Left from '../pages/Share/Left/Left';
import NavigationBar from '../pages/Share/Header/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Left></Left>
                    </Col>
                    <Col lg={6}>
                        {/* <h2>Main contain is comin...</h2> */}
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <Right></Right>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;