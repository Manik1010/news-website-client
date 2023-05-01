import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {

    const {user, signIn} = useContext(AuthContext);
    // console.log(user.displayName);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    // console.log(from);
    
    const handleLogin = (event) =>{
        event.preventDefault();

        const frm = event.target;
        const email = frm.email.value;
        const pass = frm.pass.value;
        // console.log(email, pass);

        signIn(email, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);


            // navigate('/');
            navigate(from);
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control type="text" name='pass' placeholder="your pass" />
                </Form.Group>

                <Form.Text className="text-secondary">
                    Don't have an account?<Link to={"/register"}> Register</Link >
                </Form.Text><br />
                <Button type="submit" variant="primary">Login</Button>
            </Form>

        </Container>
    );
};

export default Login;