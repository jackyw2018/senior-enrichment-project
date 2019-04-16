import axios from 'axios';

const initialState = [];

// ACTION TYPE
const FETCH_STUDENTS = 'FETCH_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';

// ACTION CREATOR
const fetchStudents = students => ({
  type: FETCH_STUDENTS,
  students,
});

const createStudent = student => ({
  type: CREATE_STUDENT,
  student,
});

// THUNK CREATOR
export const getStudents = () => dispatch => {
  return axios
    .get('/api/students')
    .then(response => response.data)
    .then(students => dispatch(fetchStudents(students)));
};

export const postStudent = student => dispatch => {
  return axios
    .post('/api/students', student)
    .then(response => response.data)
    .then(student => dispatch(createStudent(student)));
};

export const putStudent = (student, id) => dispatch => {
  return axios
    .put(`/api/students/${id}`, student)
    .then(response => response.data)
    .then(() => dispatch(getStudents()));
};

export const deleteStudent = id => dispatch => {
  return axios.delete(`/api/students/${id}`).then(() => {
    dispatch(getStudents());
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS: {
      return [...action.students];
    }
    case CREATE_STUDENT: {
      return [...state, action.student];
    }
    default: {
      return state;
    }
  }
};
