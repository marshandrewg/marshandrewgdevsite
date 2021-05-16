import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
// import { Document, Page } from 'react-pdf'
// using ES6 modules
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function ExampleNavBar(props) {
  return(
  <>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  </>
  )
}

const App = () => (
  <div id="parent">
    <Container>
      <ExampleNavBar fixed="top">
      </ExampleNavBar>
    </Container>

    
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Andrew Marsh</h1>
        
        <ExampleToast>
          We now have Toasts
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ExampleToast>
        <Document 
          file = "andrew-marsh-resume.pdf"
        >
          <Page pageNumber={1} />
        </Document>
      </Jumbotron>
    </Container>
  </div>
);

export default App;
