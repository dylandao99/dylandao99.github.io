import React from 'react';
import './ProjectCard.js';
import {
	MDBAnimation,
	MDBNavLink,
	MDBIcon
} from 'mdbreact';

function ProjectCard(props){
	return (
		<>
			<MDBAnimation reveal type='fadeInUp'>
			<MDBNavLink to={props.link}>
			<div class ="view overlay">
				<img src={props.photo} class="img-fluid rounded-lg"/>
				<div class="d-flex flex-column mask flex-center waves-effect waves-light rgba-black-strong rounded-lg">
					<div class="m-5">
					<h1 className="white-text display-4">{props.title}</h1>
					<p1 className="white-text">
						{props.caption}
					</p1>
					</div>
				</div>	
				<MDBIcon className="m-4 caption white-text fa-3x" icon="sign-in-alt"/>
			</div>
			</MDBNavLink>
			
			</MDBAnimation>
		</>
	);
}

export default ProjectCard;
