import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  collective: null,
  owner: null,
  sort: null,
  forums: [],
  galleries: [],
  mixedData: [],
  members: [],
}

const collectiveSlice = createSlice({
  name: 'collective',
  initialState,
  reducers: {
    collectiveClear: () => ({
      ...initialState,
    }),

    updateCollective: (state, action) => ({
      ...state,
      collective: action.payload,
    }),

    updateOwner: (state, action) => ({
      ...state,
      owner: action.payload,
    }),

    updateForums: (state, action) => ({
      ...state,
      forums: action.payload,
    }),

    updateGalleries: (state, action) => ({
      ...state,
      galleries: action.payload,
    }),

    updateMixedData: (state, action) => ({
      ...state,
      mixedData: action.payload,
    }),

    updateMembers: (state, action) => ({
      ...state,
      members: action.payload,
    }),

    updateSortOption: (state, action) => ({
      ...state,
      sort: action.payload,
    }),
  },
})

export const {
  collectiveClear,
  updateCollective,
  updateOwner,
  updateForums,
  updateGalleries,
  updateMixedData,
  updateMembers,
  updateSortOption,
} = collectiveSlice.actions

export default collectiveSlice.reducer
