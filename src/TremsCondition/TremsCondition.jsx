import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TremsCondition = () => {
    return (
        <div>
            <Container>
                <h2 className='text-center'>Trems & Conditions</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aliquid sequi, autem ut sunt earum ducimus quia
                    magnam impedit inventore! Pariatur non ratione inventore voluptas aspernatur temporibus adipisci unde esse?</p>
                <p>Go back to <Link to='/register'>Register</Link></p>
            </Container>
        </div>
    );
};

export default TremsCondition;