import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Library/Shared/Header/Header';
import SideNav from '../Library/Shared/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row className='gx-5'>
                <Col lg='3' className='d-none d-lg-block'>
                    <SideNav />
                </Col>
                <Col lg='9'>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Main;