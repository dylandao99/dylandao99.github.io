import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Activities from './pages/Activities';

//projects
import Ballpit from './pages/Ballpit.js';
import Vivi from './pages/Vivi.js';
import IPot from './pages/Ipot.js';
import BallRobot from './pages/Ballrobot.js';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/activities' component={Activities} />

		//projects
        <Route path='/projects/virtual-ballpit' component={Ballpit} />
        <Route path='/projects/vivi-cosplay' component={Vivi} />
        <Route path='/projects/ipot-lite' component={IPot} />
        <Route path='/projects/turtle-ball-dispensing-robot' component={BallRobot} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
