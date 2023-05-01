import React from 'react';
import headerLogo from '../../../assets/logo.png'
import { Container } from 'react-bootstrap';
import moment from 'moment';

const Header = () => {
    return (
        <Container className='text-center'>
            <div className='mt-4'>
                <img src={headerLogo} />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </Container>
    );
};

export default Header;