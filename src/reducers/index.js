import { combineReducers } from 'redux';
import studentsReducer from './studentsReducer';
import campusesReducer from './campusesReducer';

export default combineReducers({
  students: studentsReducer,
  campuses: campusesReducer,
});
