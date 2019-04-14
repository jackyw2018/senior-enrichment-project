import axios from 'axios';

const initialState = [
  { id: 1, name: 'Ami', campusId: 4 },
  { id: 2, name: 'Bailie', campusId: 1 },
  { id: 3, name: 'Bao', campusId: 2 },
  { id: 4, name: 'Dave', campusId: 3 },
  { id: 5, name: 'Erin', campusId: 1 },
  { id: 6, name: 'Ami', campusId: 2 },
  { id: 7, name: 'Grant', campusId: 3 },
  { id: 8, name: 'Haoyu', campusId: 2 },
  { id: 9, name: 'Jacky', campusId: 3 },
  { id: 10, name: 'Juan', campusId: 1 },
  { id: 11, name: 'Justine', campusId: 4 },
  { id: 12, name: 'Kristy', campusId: 4 },
  { id: 13, name: 'Lauren', campusId: 2 },
  { id: 14, name: 'Mariano', campusId: 3 },
  { id: 15, name: 'Ruby', campusId: 1 },
  { id: 16, name: 'Kevin', campusId: 1 },
  { id: 17, name: 'Preston', campusId: 4 },
  { id: 18, name: 'Alex', campusId: 4 },
  { id: 19, name: 'Theo', campusId: 2 },
  { id: 20, name: 'Vahak', campusId: 3 },
  { id: 21, name: 'Will', campusId: 1 },
];

// ACTION TYPE
const FETCH_STUDENTS = 'FETCH_STUDENTS';

// ACTION CREATOR
const fetchStudents = students => ({
  type: FETCH_STUDENTS,
  students,
});

// THUNK CREATOR
export const getStudents = () => dispatch => {
  axios
    .get('/api/students')
    .then(response => {
      return response.data;
    })
    .then(students => dispatch(fetchStudents(students)));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS: {
      return [...action.students];
    }
    default: {
      return state;
    }
  }
};
