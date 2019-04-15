import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './Nav';
import Campuses from './Campuses';
import CampusInfo from './CampusInfo';
import AddCampus from './AddCampus';
import AddStudent from './AddStudent';
import Students from './Students';
import NotFound from './NotFound';
import { getCampuses } from '../reducers/campusesReducer';
import { getStudents } from '../reducers/studentsReducer';
import StudentInfo from './StudentInfo';

class App extends Component {
  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudents();
  }

  render() {
    return (
      <Router>
        <Nav />
        <hr style={{ margin: '0' }} />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Campuses} />
            <Route path="/campuses/add" component={AddCampus} />
            <Route exact path="/campuses/:id" component={CampusInfo} />
            <Route path="/campuses/:id/edit" component={AddCampus} />
            <Route path="/students/add" component={AddStudent} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/students/:id" component={StudentInfo} />
            <Route path="/students/:id/edit" component={AddStudent} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { getCampuses, getStudents }
)(App);
