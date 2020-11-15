import React from 'react';
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation,
  MDBBtn
} from 'mdbreact';

const CSSPage = () => {
  return (
    <>
    <MDBEdgeHeader color='indigo' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
      <MDBContainer>
	  	<h1>Homepage Coming Soon!</h1>
      </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default CSSPage;


