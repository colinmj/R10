import realm, { queryFaves, createFave, deleteFave } from "../../config/model";

GET_FAVES = "GET_FAVES";
TOGGLE_FAVES = "TOGGLE_FAVES";
// ADD_FAVE = "ADD_FAVES";
// REMOVE_FAVE = "REMOVE_FAVES";

export const getFaves = faves => ({
  type: GET_FAVES,
  payload: faves
});

export const toggleFave = (session_id, onOrOff) => ({
  type: TOGGLE_FAVES,
  session_id: session_id,
  onOrOff: onOrOff
});

export const letsFetchSomeFaves = () => dispatch => {
  const data = queryFaves();
  const faves = {};
  data.map((item, key) => (faves[item.id] = "true"));
  dispatch(getFaves(faves));
};

//reducer

export default (
  state = {
    faves: {}
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
    case TOGGLE_FAVES: {
      if (action.onOrOff) createFave(action.session_id);
      else deleteFave(action.session_id);
      const data = queryFaves();
      const faves = {};
      data.map((item, key) => (faves[item.id] = "true"));
      return { ...state, loading: false, faves, error: "" };
    }
    default:
      return state;
  }
};
