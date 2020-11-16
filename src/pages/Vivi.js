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

import {photos_vivi as photos} from '../Photos.js'

const text_body = ( 
	<>
<p>(Arduino, Addressable LED Matrices, Tailoring?)</p>

<p className="text-left">Bringing this to Anime North 2019 is quite possibly the closest I’ll ever be to being a celebrity. I can’t even count how many times people asked me to take pictures with them that day…</p>

<p className="text-left">I wanted to do something creative with my experience in electronics, and cosplay seemed like a great place to start. I was inspired by the cosplay builds of Mythbusters’ Adam Savage, who seemed to have a lot of fun with his technical know-how.</p>

<p className="text-left">Final Fantasy’s Vivi/Black Mage was the perfect character. Not only is he well-known (I haven’t even played FFIX and I’m familiar), his shadowed face and glowing eyes create the perfect opportunity for addressable LEDs.</p>

<p className="text-left">I’m glad to report that my Arduino and electronics experience made the eyes really easy to make. I mounted LED matrices to the bottom of cheap sunglasses without the lenses, and powered/programmed them with an Arduino powered by a 9V battery. To change the eye type, I created a little button-pad that I could hide inside my glove. The final effect was even better than I imagined (demo below)!</p>

<p className="text-left">I’m unhappy to report that my lack of tailoring experience made the rest of the outfit a nightmare. Thrift-store hunting for base clothing went alright, but as it turns out, most places don’t sell comically-oversized yellow mage hats, among other things. You really can learn anything on Youtube these days; The proof is in my fantasy pants and sewing needle wounds. The hardest part by far was sewing a wireframe into the cape and the hat frame. Oh, did I mention that I don’t have a sewing machine?</p>

<p className="text-left">It was all totally worth it though.</p>

<p className="text-left">I can’t tell you how many times people came up to me, gushed about their love for Vivi, and asked to take a picture with me. I was getting stopped for pictures constantly, much to the annoyance of my friends. The worst part of it all was not being able to breath, as one might expect from wearing a black sack over their head in a hot convention center.</p>

<p className="text-left">I repeat - totally worth it. If you’ve ever had the slightest interest, I highly recommend trying cosplay. It’s by far the most unique fruit of my labour.</p>
	</>
);


function Vivi() {
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
	  					Vivi Cosplay
                    </strong>
                  </h1>
                  <MDBRow />
	  				{text_body}	
                </MDBCardBody>
	  		</MDBCol>
	  	</MDBRow>

	  	<MDBRow center className="m-2">
	  	<MDBCol md='4'>
		<video class="video-fluid z-depth-1" autoplay loop controls muted>
		  <source src="https://i.imgur.com/cRzcRYl.mp4" type="video/mp4" />
		</video>
	  	</MDBCol>

	  	<MDBCol md='4'>
		<video class="video-fluid z-depth-1" autoplay loop controls muted>
		  <source src="https://i.imgur.com/xjiT0U7.mp4" type="video/mp4" />
		</video>
	  	</MDBCol>
	  	</MDBRow>


	  	<LightboxGallery photoList={photos}/>

      </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default Vivi;
