import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  data: {
    title: '',
    location: '',
    location_type: 'VIRTUAL',
    event_date: '',
    starttime: '',
    endtime: '',
    description: '',
    details: '',
    collective_id: '',
    owneraddress: '',
    timezone: '',
    image: '',
  },
}

const event = createSlice({
  name: 'event',
  initialState,
  reducers: {
    eventClear: () => ({
      ...initialState,
    }),

    updateEvent: (state, action) => ({
      ...state,
      data: action.payload,
    }),

    // updateOwner: (state, action) => ({
    //     ...state,
    //     owner: action.payload,
    // }),

    // updateForums: (state, action) => ({
    //     ...state,
    //     forums: action.payload,
    // }),

    // updateGalleries: (state, action) => ({
    //     ...state,
    //     galleries: action.payload,
    // }),

    // updateMixedData: (state, action) => ({
    //     ...state,
    //     mixedData: action.payload,
    // }),

    // updateMembers: (state, action) => ({
    //     ...state,
    //     members: action.payload,
    // }),

    // updateSortOption: (state, action) => ({
    //     ...state,
    //     sort: action.payload,
    // }),
  },
})

export const { eventClear, updateEvent } = event.actions
export default event.reducer
