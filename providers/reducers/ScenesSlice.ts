import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'
import http from '../../services/api/index';


export interface SceneState {
  scenes:any[],
  isSceneLoading:boolean
  isLoadedMain3DModel:boolean
}

const initialState: SceneState = {
  scenes:[],
  isSceneLoading:false,
  isLoadedMain3DModel:false
}

export const scenesState = createSlice({
  
  name: 'scenes',
  initialState,
  reducers: {

    gettingScenessSuccess: (state, action: PayloadAction<any[]>) => {      
      state.scenes = action.payload
    },
    isScenesLoading: (state, action: PayloadAction<boolean>) => {      
      state.isSceneLoading = action.payload
    },
    setIsLoaded3DModel: (state, action: PayloadAction<boolean>) => {      
      state.isLoadedMain3DModel = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { gettingScenessSuccess, setIsLoaded3DModel, isScenesLoading} = scenesState.actions

export const getScenesSelector = (state:RootState) => state.ScenesReducer.scenes
export const getIsSceneLoadingSelector = (state:RootState) => state.ScenesReducer.isSceneLoading

export const getIsLoaded3DModelSelector = (state:RootState) => state.ScenesReducer.isLoadedMain3DModel



export default scenesState.reducer