import styles from '../Navbars/Navbar.module.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import React from 'react';

const Navbars = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='justify-content-between mt-4 mb-4 rounded'>
                <Nav.Link href="/" as={NavLink} className={styles.leftNav}>Sport-Shoes</Nav.Link>
                <Nav>
                    <Nav.Link href="/login" as={NavLink}>Login</Nav.Link>
                    <Nav.Link href="/register" as={NavLink}>Register</Nav.Link>
                    <Nav.Link href="/basket" as={NavLink}>Cart</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navbars;