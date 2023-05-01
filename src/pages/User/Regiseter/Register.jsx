import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const [accept, setAccept] = useState(false);

    const { createUser, profileUser } = useContext(AuthContext);


    const handelRegister = (e) => {
        e.preventDefault();

        const frm = e.target;
        const name = frm.name.value;
        const url = frm.url.value;
        // console.log(url);
        const email = frm.email.value;
        const pass = frm.pass.value;
        // console.log(email, name, pass);

        createUser(email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                profileUser(name, url)
                    .then(() => {
                        // Profile updated!
                        console.log(name, url);
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        const errorMessage = error.message;
                        console.log(errorMessage);
                        // ...
                    });
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
                  });

            }

    const handelAccepted = (event) => {
            // console.log(event.target.checked);
            setAccept(event.target.checked)
        }

        return (
            <Container className='w-50 mx-auto'>
                <h3>Please Register</h3>
                {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name </Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='pass' placeholder="Password" required />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name='accept' label="Accept Terems and Conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <br />
            <Form.Text className="text-secondary">
                Alreadt have an account?<Link to={"/login"}> Login</Link >
            </Form.Text>
            <Form.Text className="text-success">

            </Form.Text>
            <Form.Text className="text-danger">

            </Form.Text>
        </Form> */}
                <Form onSubmit={handelRegister}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" name='name' placeholder="your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Password</Form.Label>
                        <Form.Control type="text" name='pass' placeholder="your pass" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Photo URL</Form.Label>
                        <Form.Control type="text" name='url' placeholder="your photo url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handelAccepted}
                            type="checkbox"
                            name='accept'
                            // label="Accept Terems and Conditions" />
                            label={<>Accept <Link to="/terms">Terems and Conditions</Link></>} />
                    </Form.Group>

                    <Button type="submit" variant="primary" disabled={!accept}>Register</Button>
                    <Form.Text className="text-secondary">
                        Alreadt have an account?<Link to={"/login"}> Login</Link >
                    </Form.Text><br />
                </Form>
            </Container>
        );
    };

    export default Register;