import realm, { queryFaves } from "../../config/model";

GET_FAVES = "GET_FAVES";

const getFaves = faves => ({
  type: GET_FAVES,
  payload: faves
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
    faves: ""
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
    default:
      return state;
  }
};
