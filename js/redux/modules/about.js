const CODE_OF_CONDUCT_URL =
  "https://r10app-95fea.firebaseio.com/code_of_conduct.json";

//actions
const CODE_CONDUCT_LOADING = "CODE_CONDUCT_LOADING";
const CODE_CONDUCT_SUCCESS = "CODE_CONDUCT_SUCCESS";
const CODE_CONDUCT_ERROR = "CODE_CONDUCT_ERROR";

const codeOfConductLoading = () => ({
  type: CODE_CONDUCT_LOADING
});

const codeOfConductSuccess = data => ({
  type: CODE_CONDUCT_SUCCESS,
  payload: data
});

const codeOfConductError = err => ({
  type: CODE_CONDUCT_ERROR,
  payload: err
});

export const getConduct = () => dispatch => {
  dispatch(codeOfConductLoading());

  fetch(CODE_OF_CONDUCT_URL)
    .then(res => res.json())
    .then(data => dispatch(codeOfConductSuccess(data)))
    .catch(err => dispatch(codeOfConductError(err)));
};

//reducer

export default (
  state = {
    loading: false,
    data: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case CODE_CONDUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: ""
      };
    }
    case CODE_CONDUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };
    }
    case CODE_CONDUCT_ERROR: {
      return {
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
