import axios from 'axios';

const initialState = [
  {
    id: 1,
    name: 'Luna',
    imageUrl:
      'https://images.unsplash.com/photo-1504776230347-f7bbe91846a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 2,
    name: 'Terra',
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
  },
  {
    id: 3,
    name: 'Mars',
    imageUrl:
      'https://images.unsplash.com/photo-1465158753229-aa725fff85a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Titan',
    imageUrl:
      'https://images.unsplash.com/photo-1443456066412-3e3ea69ee37c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

// ACTION TYPE
const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';

// ACTION CREATOR
const fetchCampuses = campuses => ({
  type: FETCH_CAMPUSES,
  campuses,
});

const createCampus = campus => ({
  type: CREATE_CAMPUS,
  campus,
});

// THUNK CREATOR
export const getCampuses = () => dispatch => {
  return axios
    .get('/api/campuses')
    .then(response => response.data)
    .then(campuses => dispatch(fetchCampuses(campuses)));
};

export const postCampus = campus => dispatch => {
  return axios
    .post('/api/campuses', campus)
    .then(response => response.data)
    .then(campus => dispatch(createCampus(campus)));
};

export const putCampus = (campus, id) => dispatch => {
  return axios.put(`/api/campuses/${id}`, campus).then(() => {
    dispatch(getCampuses());
  });
};

export const deleteCampus = id => dispatch => {
  return axios.delete(`/api/campuses/${id}`).then(() => {
    dispatch(getCampuses());
  });
};

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUSES: {
      return [...action.campuses];
    }
    case CREATE_CAMPUS: {
      return [...state, action.campus];
    }
    default: {
      return state;
    }
  }
};
