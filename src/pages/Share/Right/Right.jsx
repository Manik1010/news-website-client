import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Qzone from '../Qzone/Qzone';
import bgLogo from '../../../assets/bg.png'

const Right = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button variant="outline-secondary" className='my-2'><span className='mr-2'><FaGoogle></FaGoogle></span> Login With Google</Button>
                <Button variant="outline-secondary"> <span className='mr-2'><FaGithub></FaGithub></span>Login With GitHub</Button>
            </div>
            <div>
                <h4 className='mt-4 mb-2'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebookF />FaceBook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twiter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bgLogo} />
                <div>
                    <h2>Create an Amazing Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Danger</Button>
                </div>
            </div>
        </div>
    );
};

export default Right;