import React, {Component} from 'react';
import NavbarComponent from './components/NavbarComponent';
import CollectionsComponent from './components/CollectionsComponent';
import FooterComponents from './components/FooterComponents';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Container} from 'react-bootstrap';

export default class App extends Component {
  render(){
    return(
<body>
    <div className="App">
      <NavbarComponent/>
      <div className="mt-3">
      <Container fluid>
      <h2 className="head-title"><strong>Explore Collections</strong></h2>
      <CollectionsComponent/>
      </Container>
      </div>
    </div>
    </body>
    );
  }
}

