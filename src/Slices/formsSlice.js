// import { createSlice } from "@reduxjs/toolkit";

// const formsSlice = createSlice({
//   name: "forms",
//   initialState: {
//     templates: [],
//     responses: [],
//   },
//   reducers: {
//     addTemplate: (state, action) => {
//       state.templates.push(action.payload);
//     },
//     editTemplate: (state, action) => {
//       state.templates = state.templates.map((template) =>
//         template.id === action.payload.id ? action.payload : template
//       );
//     },
//     deleteTemplate: (state, action) => {
//       state.templates = state.templates.filter(
//         (template) => template.id !== action.payload
//       );
//     },
//     addResponse: (state, action) => {
//       state.responses.push(action.payload);
//     },
//   },
// });

// export const { addTemplate, addResponse, deleteTemplate, editTemplate } =
//   formsSlice.actions;
// export default formsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const isValidTemplate = (template) => {
  return (
    template &&
    typeof template.id === "string" &&
    typeof template.title === "string" &&
    typeof template.description === "string" &&
    Array.isArray(template.questions)
  );
};

const formsSlice = createSlice({
  name: "forms",
  initialState: {
    templates: [],
    responses: [],
  },
  reducers: {
    // addTemplate: (state, action) => {
    //   if (isValidTemplate(action.payload)) {
    //     state.templates.push(action.payload);
    //   } else {
    //     console.warn("Invalid template rejected:", action.payload);
    //   }
    // },
    addTemplate: (state, action) => {
      const t = action.payload;
      if (t && typeof t.id === "string" && Array.isArray(t.questions)) {
        state.templates.push(t);
      } else {
        console.warn("Rejected invalid template:", t);
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
  },
});

export const { addTemplate, addResponse, deleteTemplate, editTemplate } =
  formsSlice.actions;

export default formsSlice.reducer;
