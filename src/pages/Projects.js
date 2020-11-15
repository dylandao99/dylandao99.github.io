import React from 'react';
import './Projects.css'
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBNavLink
} from 'mdbreact';

import ProjectCard from '../components/ProjectCard.js';

import {photos_vivi, photos_ballpit, photos_ipot} from '../Photos.js';

import ballpit from '../assets/ballpit-1.png'
import ipot from '../assets/ipot-lite-1.jpg'
import aer201 from '../assets/aer201-1.png'

class Home extends React.Component {

  render(){
  return (
    <>
	  <MDBFreeBird className="freebird">
      <MDBAnimation type='fadeInUp' duration='1000ms'>
		  <h1 className='display-3 font-weight-bold text-center'>Projects</h1>
      </MDBAnimation>
	  </MDBFreeBird>

        <MDBContainer>
                <MDBRow className='d-flex'>
                  <MDBCol md='6'>

	  				<ProjectCard 
	  					link='/projects/virtual-ballpit' 
	  					photo={photos_ballpit[0].src}
	  					title='Virtual Ball Pit'	
						caption="For ball-pit-loving germaphobes everywhere."
	  				/> 
	  			

	  				<ProjectCard 
	  					link='/projects/ipot-lite' 
	  					photo={photos_ipot[0].src}
	  					title='iPot Lite'	
	  					caption="A sunlight-chasing pot for a sunlight-hungry plant. It's very allergic to water, unlike its earthy inhabitant."
	  				/> 

	  				<ProjectCard 
	  					link='/projects/turtle-ball-dispensing-robot' 
	  					photo={aer201}
	  					title="'Turtle' Ball-Dispensing Bot"
	  					caption="If you squint, it sort of looks like a turtle."
	  				/> 
	  				
                  </MDBCol>

                  <MDBCol md='6'>
	  				<ProjectCard 
	  					link='/projects/vivi-cosplay' 
	  					photo={photos_vivi[0].src}
	  					title='Vivi Cosplay'	
						caption="Complete with LED-matrix eyes! I don't know why I haven't played Final Fantasy IX yet."
	  				/> 

                  </MDBCol>

	  			</MDBRow>
	  			
				<MDBAnimation reveal type='fadeInUp'>
					<h1 className='mt-3 mb-5 text-center'>More to come!</h1>
				</MDBAnimation>
        </MDBContainer>
    </>
  );
};
}

export default Home;

