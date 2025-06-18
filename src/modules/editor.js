import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";

const CHANGE_EDITOR_FIELD = "editor/CHANGE_EDITOR_FIELD";
const INITIALIZE_EDITOR = "editor/INITIALIZE_EDITOR";

export const changeField = createAction(
  CHANGE_EDITOR_FIELD,
  ({ section, key, value }) => ({
    section,
    key,
    value,
  })
);

const initialState = {
  main: {
    selectedTemplate: null,
    photo: "",
    wording: "",
    selectedColor: "#000000",
    position: 50,
  },
};

const editor = handleActions(
  {
    [CHANGE_EDITOR_FIELD]: (state, { payload: { section, key, value } }) =>
      produce(state, (draft) => {
        draft[section][key] = value;
      }),
    [INITIALIZE_EDITOR]: (state, { payload: section }) => ({
      ...state,
      [section]: initialState[section],
    }),
  },
  initialState
);

export default editor;
