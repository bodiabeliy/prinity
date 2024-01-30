
import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import ScenesReducer from "./reducers/ScenesSlice"

const rootReducer = combineReducers({ 
    ScenesReducer
 })

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
  })
}
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const wrapper = createWrapper(store);



