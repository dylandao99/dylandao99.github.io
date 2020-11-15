import React, {useState, useCallback} from 'react';
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText
} from 'mdbreact';
import LightboxGallery from '../components/Gallery.js'

import vivi1 from '../assets/vivi-1.jpg';
import vivi2 from '../assets/vivi-2.jpg';
import vivi3 from '../assets/vivi-3.jpg';

const photos = [
  {src: vivi1,width:3,height:4,title:""},
  {src: vivi2,width:3,height:4},
  {src: vivi3,width:4,height:3},
];


function Vivi() {
  return (
    <>
    <MDBEdgeHeader color='indigo' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
      <MDBContainer>
              <MDBCol
                md='12'
                className='mx-auto float-none white z-depth-1 py-2 px-2'
              >
                <MDBCardBody className='text-center'>
                  <h1 className='h1-responsive mb-4'>
                    <strong className='font-weight-bold'>
	  					Vivi Cosplay
                    </strong>
                  </h1>
                  <MDBRow />
                  <p>React Bootstrap with Material Design</p>
                  <p className='pb-4'>
                    This application shows the actual use of MDB React
                    components in the application.
                  </p>
                </MDBCardBody>
	  		</MDBCol>

	  	<LightboxGallery photoList={photos}/>

      </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default Vivi;
