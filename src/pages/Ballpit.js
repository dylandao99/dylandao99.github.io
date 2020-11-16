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

import {photos_ballpit as photos} from '../Photos.js'

function Ballpit() {
  return (
	  window.scrollTo(0,0),
    <>
      <MDBAnimation type='zoomIn' duration='500ms'>
      <MDBContainer>
	  	<MDBRow className="m-2">
              <MDBCol
                md='12'
                className='mx-auto float-none white z-depth-1 py-2 px-2'
              >
                <MDBCardBody className='text-center'>
                  <h1 className='h1-responsive mb-4'>
                    <strong className='font-weight-bold'>
	  					Virtual Ball Pit
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
	  	</MDBRow>

	  	<MDBRow center className="m-2 text-center">
	  	<MDBCol md='12'>
		<video class="video-fluid z-depth-1" autoplay loop controls muted>
		  <source src="https://i.imgur.com/AiPdR2H.mp4" type="video/mp4" />
		</video>
	  	</MDBCol>
	  	</MDBRow>


	  	<LightboxGallery photoList={photos}/>

      </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default Ballpit;
