import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBContainer,
  MDBIcon
} from 'mdbreact';


class Navbar extends React.Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  setActive = navItemID=> () => {
  };

	render(){

    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

		return(
          <MDBNavbar className="shadow-none" color='white' light expand='md' fixed='top' scrolling>
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold' onClick={this.closeCollapse('mainNavbarCollapse')}>
              <h2 className='align-middle'>Hi, I'm Dylan!</h2>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>

			<MDBContainer>
              <MDBNavbarNav>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/experiences'
                  >
                    <h3>Experiences</h3>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/projects'
                  >
                    <h3>Projects</h3>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/activities'
                  >
                    <h3>Activities</h3>
                  </MDBNavLink>
                </MDBNavItem>

              </MDBNavbarNav>
			</MDBContainer>
                
				  <MDBNavbarNav right>
				<div className="d-flex flex-row">
                <MDBNavItem>
                  <MDBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://www.linkedin.com/in/dylanhhdao/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <MDBIcon fab icon='linkedin-in' />
                      </strong>
                    </a>
                    <span>LinkedIn</span>
                  </MDBTooltip>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://github.com/dylandao99'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <MDBIcon fab icon='github' />
                      </strong>
                    </a>
                    <span>GitHub</span>
                  </MDBTooltip>
                </MDBNavItem>
                <MDBNavItem className='mr-2'>
                  <MDBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://github.com/dylandao99/dylandao_resume/blob/master/dao_dylan_resume.pdf'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <MDBIcon icon='file' />
                      </strong>
                    </a>
                    <span>Resume</span>
                  </MDBTooltip>
                </MDBNavItem>
				</div>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
		);
	}
}

export default Navbar
