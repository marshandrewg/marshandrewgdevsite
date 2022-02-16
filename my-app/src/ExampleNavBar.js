import Button from 'react-bootstrap/Button';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';

function ExampleNavBar(props) {
    return(
    <>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#resume">Resume</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
    </>
    )
  }
export default ExampleNavBar;