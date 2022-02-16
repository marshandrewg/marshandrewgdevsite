import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import ExampleNavBar from './ExampleNavBar';
import Image from 'react-bootstrap/Image'
import marsh from './marsh.png'
import discordbotpic from './discordbotpic.png'

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
          <strong className="mr-auto">Welcome!</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

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
          Welcome to my website, I'm Andrew Marsh: a Software Engineer based in Raleigh, NC.  
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ExampleToast>
        <body>
        <p>
          I graduated from North Carolina State University with a B.S. in Computer Science. I'm most familiar with backend (especially Python & Java) but am open to learning new things, and test out front-end tech like React on my page here!
          </p>
      </body>
      </Jumbotron>
      <Jumbotron>
        <a href="https://github.com/roanurquhart/fridge-thought-bot">Discod Bot </a>
        <div>
        <img src={discordbotpic}
        width="450" 
        height="500"></img>
        </div>
      </Jumbotron>
    </Container>
  </div>
);

export default App;
