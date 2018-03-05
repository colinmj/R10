import realm, { queryFaves, createFave, deleteFave } from "../../config/model";

GET_FAVES = "GET_FAVES";
ADD_FAVE = "ADD_FAVES";
REMOVE_FAVE = "REMOVE_FAVES";

const getFaves = faves => ({
  type: GET_FAVES,
  payload: faves
});

const addFave = fave => ({
  type: ADD_FAVE,
  payload: fave
});

const removeFave = fave => ({
  type: REMOVE_FAVE,
  payload: fave
});

export const letsFetchSomeFaves = () => dispatch => {
  const data = queryFaves();
  const faves = {};
  data.map((item, key) => (faves[item.id] = "true"));
  dispatch(getFaves(faves));
};

export const letsAddAFave = faveId => dispatch => {
  const added = createFave(faveId);
  dispatch(addFave(faveId));
};

export const letsRemoveAFave = faveId => dispatch => {
  const removed = deleteFave(faveId);
  dispatch(removeFave(faveId));
};

//reducer

export default (
  state = {
    faves: "",
    addFave: "",
    removeFave: ""
  },
  action
) => {
  switch (action.type) {
    case GET_FAVES: {
      return {
        ...state,
        faves: action.payload
      };
    }
    case ADD_FAVE: {
      return {};
    }
    case REMOVE_FAVE: {
      return {};
    }
    default:
      return state;
  }
};
