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

const text_body = (
<>
<p>(C#, Box2D, SMFL Graphics)</p>

<p className="text-left">The best part of it all was watching people play and have fun with what I created. I wonder if this is how game developers feel…</p>

<p className="text-left">The inspiration for the project was my engineering design course, in which my team was tasked with improving the hygiene of childrens’ waiting room toys at a pediatric clinic. The problem was that toys were required to calm children down, but led to cross-contamination when sick children played with them. </p>

<p className="text-left">Most other teams decided to improve the cleaning process with fancy dishwashers and the like, but our team eliminated the root of the problem. What if we made a toy that you don’t touch?</p>

<p className="text-left">And so, as the team’s developer, I borrowed a Kinect and a projector, and got to work. I started with a Kinect depth-sensor demo in C#, added the Box2D physics engine to add balls to play with, and used SMFL for rendering the balls. </p>

<p className="text-left">The most difficult part was having the balls bounce off of a player’s silhouette. Since the silhouette is always transforming, creating a collision object that matches its shape is a challenge. </p>

<p className="text-left">My solution was to map a collision object to each 16x16 area which is activated when the player’s silhouette covers the area. This was a computationally-simple method of having players interact with the balls, but since the player collision objects were static, players could not swipe their hand to accelerate the ball, only reflect it. I’d definitely like to revisit this; being able to swing your arm at a ball would have been a lot of fun!</p>

<p className="text-left">The project was never implemented at the pediatric clinic, which is entirely understandable. The final product was graphically rough, and had not much else to do but bounce balls. That said, presenting at the showcase, and watching people legitimately have fun with something I created was more than fulfilling enough. </p>
</>
);

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
	  				{text_body}
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
