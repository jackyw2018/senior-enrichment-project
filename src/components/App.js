import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './Nav';
import Campuses from './Campuses';
import CampusInfo from './CampusInfo';
import AddForm from './AddForm';
import Students from './Students';
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
          <Route exact path="/" component={Campuses} />
          <Switch>
            <Route path="/campuses/add" component={AddForm} />
            <Route path="/campuses/:id" component={CampusInfo} />
            <Route path="/students/add" component={AddForm} />
            <Route exact path="/students" component={Students} />
            <Route path="/students/:id" component={StudentInfo} />
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
