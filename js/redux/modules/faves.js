import {
  createFave
} from "../../config/model";

CREATE_NEW_FAVE = "CREATE_NEW_FAVE";

const createNewFave = fave => ({
  type: CREATE_NEW_FAVE,
  payload: fave
});

export const newFave = () => dispatch => {
  dispatch(createNewFave(fave));
};

//reducer

export default (
  state = {
    fave: ""
  },
  action
) => {
  switch (action.type) {
    case CREATE_NEW_FAVE:
      {
        return {
          ...state,
          fave: action.payload
        }
      }
    default:
      return state;
  }
}