import { createSelector } from "reselect";
const editorState = (state) => state.editor;

export const selectEditorMainSection = createSelector(
  [editorState],
  (editor) => editor.main
);
