import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project, ProjectState } from "../types";

const initialState: ProjectState = {
  data: null,
};

export const projectSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setProjectData: (state, action: PayloadAction<Project>) => ({
      data: action.payload,
    }),
  },
});

export const { setProjectData } = projectSlice.actions;

export default projectSlice.reducer;
