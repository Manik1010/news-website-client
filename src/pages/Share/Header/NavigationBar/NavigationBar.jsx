import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const NavigationBar = () => {
    // const { user } = useContext((AuthContext))
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.displayName);

    const handelLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/criear">Criear</Link>
                        </Nav>
                        <Nav>
                            {
                                user && <Nav.Link><FaRegUserCircle style={{ fontSize: '2rem' }}></FaRegUserCircle>Profile</Nav.Link>
                            }

                            {
                                user ? <Button onClick={handelLogOut} variant="secondary">LogOut</Button>
                                    : <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;