import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'
import http from '../../services/api/index';


export interface SceneState {
  scenes:any[]
}

const initialState: SceneState = {
  scenes:[],
}

export const scenesState = createSlice({
  
  name: 'scenes',
  initialState,
  reducers: {
    gettingScenessSuccess: (state, action: PayloadAction<any[]>) => {      
      state.scenes = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { gettingScenessSuccess} = scenesState.actions

export const getScenesSelector = (state:RootState) => state.ScenesReducer.scenes



export default scenesState.reducer