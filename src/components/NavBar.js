import React from "react";
import { Container, Navbar } from "react-bootstrap";


const NavBar = () => {
return(
    <>
    <Navbar expand="lg" bg="dark" variant="dark" className="mb-5">
        <Container>
            <Navbar.Brand className="fst-italic fs-4 ">NoteBook</Navbar.Brand>
        </Container>
    </Navbar>
    </>
)
};

export default NavBar;