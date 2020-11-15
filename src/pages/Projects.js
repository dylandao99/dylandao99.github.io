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

import ballpit from '../assets/ballpit-1.png'
import vivi from '../assets/vivi-2.jpg'
import ipot from '../assets/ipot-lite-1.jpg'
import aer201 from '../assets/aer201-1.png'

class Home extends React.Component {

  render(){
  return (
    <>
    <MDBEdgeHeader color='indigo' className='sectionPage' />
	  <MDBFreeBird className="freebird">
      <MDBAnimation type='fadeInUp' duration='1000ms'>
		  <h1 className='display-3 font-weight-bold text-center'>Projects</h1>
      </MDBAnimation>
	  </MDBFreeBird>

        <MDBContainer>
                <MDBRow className='d-flex'>
                  <MDBCol md='6'>
                    <MDBAnimation reveal type='fadeInUp'>
						<MDBNavLink to='/projects/virtual-ballpit'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
	  					  hover
                          className='img-fluid'
                          src={ballpit}
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle hover>
	  						Virtual Ball Pit
                          </MDBCardTitle>
                          <MDBCardText>
	  						For ball-pit-loving germophobes everywhere.
                          </MDBCardText>
                          <MDBCardText>
	  						C#, Kinect SDK, Box2D, SFML
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
						</MDBNavLink>
                    </MDBAnimation>

                    <MDBAnimation reveal type='fadeInUp'>
						<MDBNavLink to='/projects/ipot-lite'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
	  					  hover
                          className='img-fluid'
                          src={ipot}
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
	  						iPot Lite
                          </MDBCardTitle>
                          <MDBCardText>
	  						A sunlight-chasing pot for a sunlight-hungry plant. It's very allergic to water, unlike its earthy inhabitant. 
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
						</MDBNavLink>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBAnimation reveal type='fadeInUp'>
						<MDBNavLink to='/projects/vivi-cosplay'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
	  					  hover
                          className='img-fluid'
                          src={vivi}
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
	  						Vivi Cosplay
                          </MDBCardTitle>
                          <MDBCardText>
	  						Complete with LED-matrix eyes! I don't know why I haven't played Final Fantasy IX yet.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
						</MDBNavLink>
                    </MDBAnimation>

                    <MDBAnimation reveal type='fadeInUp'>
						<MDBNavLink to='/projects/turtle-ball-dispensing-robot'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
	  					  hover
                          className='img-fluid'
                          src={aer201}
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
	  						"Turtle" Ball-Dispensing Bot
                          </MDBCardTitle>
                          <MDBCardText>
	  						If you squint, it sort of looks like a turtle.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
						</MDBNavLink>
                    </MDBAnimation>
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

