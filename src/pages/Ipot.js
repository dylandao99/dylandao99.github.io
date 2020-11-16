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

import {photos_ipot as photos} from '../Photos.js'

const text_body = (
	<>
<p>(Raspberry Pi/Linux, Computer Vision, Lots of sensors)</p>

<p className="text-left">Do you know any forgetful plant owners in your life? Do they leave their plants near the window, only for the sunlight to change direction throughout the day and starve the plant of energy? Do they forget to water it too?</p>

<p className="text-left">Presenting the iPot Lite - a smart plant pot that follows lite (pun intended) and designated water sources.</p>

<p className="text-left">This was my team’s project for MakeUofT 2020, Canada’s largest hardware hackathon hosted by IEEE’s University of Toronto student branch. The focus of the hackathon was Connectivity, and it gives me much amusement to say that we won the award for The Best Unconnected Hack at a Connectivity hackathon. </p>

<p className="text-left">I have plenty of experience setting up Linux devices, so I’m generally in charge of setting up the Linux environment and peripherals when doing hackathon projects with a team. My main task was setting up the Raspberry Pi with a Pi Camera to have it track and follow predefined water source symbols at regular time intervals, as well as setting up the master-slave interface between it and an Arduino.</p>

<p className="text-left">The Pi Camera will regularly look for a water source symbol. When it finds one, it tells the Arduino to drive the motors in the direction of the symbol. When not looking for water, the Arduino is in control, using floor-facing ultrasonic sensors and photosensors to detect light and ledges. </p>

<p className="text-left">I still can’t believe my team built it all in one night. Not only did it have all the features we wanted it to, it did it with elegance. </p>

<p className="text-left">It’s also really cute!</p>

	</>
);

function Ipot() {
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
	  					iPot Lite
                    </strong>
                  </h1>
                  <MDBRow />
	  				{text_body}
                </MDBCardBody>
	  		</MDBCol>
	  	</MDBRow>

	  	<MDBRow center className="m-2 text-center">
	  	<MDBCol md='12'>
		<video class="video-fluid z-depth-1" autoplay loop controls muted>
		  <source src="https://i.imgur.com/Dx0fTkh.mp4" type="video/mp4" />
		</video>
	  	</MDBCol>

	  	</MDBRow>


	  	<LightboxGallery photoList={photos}/>

      </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default Ipot;
