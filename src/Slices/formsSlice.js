import { createSlice } from "@reduxjs/toolkit";

const formsSlice = createSlice({
  name: "forms",
  initialState: {
    templates: [],
    responses: [],
    searchTherm: "",
  },
  reducers: {
    addTemplate: (state, action) => {
      const t = action.payload;
      if (t && typeof t.id === "string" && t.questions) {
        state.templates.push(t);
      } else {
        console.error("Rejected invalid template:", t);
      }
    },
    editTemplate: (state, action) => {
      state.templates = state.templates.map((template) =>
        template?.id === action.payload?.id ? action.payload : template
      );
    },

    deleteTemplate: (state, action) => {
      state.templates = state.templates.filter(
        (template) => template.id !== action.payload
      );
    },
    addResponse: (state, action) => {
      state.responses.push(action.payload);
    },
    setSearchTherm: (state, action) => {
      state.searchTherm = action.payload;
    },
  },
});

export const {
  addTemplate,
  addResponse,
  deleteTemplate,
  editTemplate,
  setSearchTherm,
} = formsSlice.actions;

export default formsSlice.reducer;
