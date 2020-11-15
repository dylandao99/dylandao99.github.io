import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/Navbar';

class App extends Component {

  render() {
    return (
	<Router>
	  <main style={{ marginTop: '3rem' }}>
		<Navbar />
		<Routes />
	  </main>
	</Router>
    );
  }
}

export default App;
