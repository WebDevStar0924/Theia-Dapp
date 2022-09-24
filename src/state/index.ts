import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { load, save } from 'redux-localstorage-simple'
import profileReducer from './profile'
import networkReducer from './network'
import chainReducer from './chain'
import toastsReducer from './toasts'
import projectReducer from './project'
import eventReducer from './event'
import collectiveReducer from './collective'

const PERSISTED_KEYS: string[] = []
const store = configureStore({
  reducer: {
    profile: profileReducer,
    network: networkReducer,
    chain: chainReducer,
    project: projectReducer,
    toasts: toastsReducer,
    collective: collectiveReducer,
    event: eventReducer,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: true }),
    save({ states: PERSISTED_KEYS }),
  ],
  preloadedState: load({ states: PERSISTED_KEYS }),
})

export default store
