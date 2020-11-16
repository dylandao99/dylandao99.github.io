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

import {photos_turtle as photos} from '../Photos.js'

const text_body = (
<>
<p>(C-based Microcontroller, Arduino, Sensors, PID feedback controllers)</p>

<p className="text-left">If there’s anything I’ve gained from building this robot, it’s a strong belief in Murphy’s Law - Everything that can go wrong, will go wrong. Engineering is just the endless struggle to design things that have as few things that can go wrong as possible.</p>

<p className="text-left">This is my final project for the infamous AER201 Robot Design course, one of the hallmark projects of the Engineering Science undergraduate program at the University of Toronto. My team’s project was to design an autonomous robot that traverses a line of sideways baskets (openings facing both left and right), and put a ball inside if there isn’t already a ball. It sounds pretty simple until you consider that there is no black line to follow to go straight, and that the robot and circuit controllers have to be made from scratch.</p>

<p className="text-left">My team decided that the most efficient design would be to carry the balls in a gumball-machine fashion, drive over the baskets, and drop balls down chutes when an empty basket is in between. Even now, I think our idea is great, but practice is rarely ever as great as theory.</p>

<p className="text-left">My main role was designing the circuits to control and power the motors and the sensors. I soldered a power supply for the motors, 12V-to-5V power supply for the basket-detection ultrasonic sensors, and a modified H-bridge motor controller to control speed and direction as well as calibrate the robot to drive straight</p>

<p className="text-left">All the problems appeared when we were integrating. It’s really hard to make a robot drive straight without a line to follow. Everything from the alignment of the frame, to the manufacturing differences in identical motors, to the motor-controlling software caused huge headaches.</p>

<p className="text-left">I ended up joining in on the software effort, adding a gyroscope to detect changes in heading, and implementing an Arduino PID feedback controller to drive even remotely straight. It worked pretty well, but pretty well wasn’t good enough</p>

<p className="text-left">It wasn’t until near the end of the project that we realized that the clearance for a basket beneath our robot required that we drive nearly perfectly straight, which was practically impossible. Our robot was disqualified spectacularly when it drove at a slight angle and pushed a basket out of place.</p>

<p className="text-left">I learned a lot from this project, but the most important thing is Murphy’s Law. We should have integrated every tiny step along the way to find these issues and design to maximize tolerances for imperfections. Nothing in real-life is perfect, so we shouldn’t be designing while assuming it will be.</p>
</>
);

function Ballrobot() {
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
	  					'Turtle' Ball-Dispensing Robot
                    </strong>
                  </h1>
                  <MDBRow />
	  				{text_body}
                </MDBCardBody>
	  		</MDBCol>
	  	</MDBRow>

	  	<LightboxGallery photoList={photos}/>

      </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default Ballrobot;
