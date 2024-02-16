
import { AppDispatch } from '@/providers/store';
import http from './api/index';
import { gettingScenessSuccess, isScenesLoading } from '@/providers/reducers/ScenesSlice';


 export const getScenes =async(dispatch:AppDispatch) => {
    dispatch(isScenesLoading(true))

    try {        
        const response = await http.get(`/scenes`);    
        dispatch(gettingScenessSuccess(response.data))
        dispatch(isScenesLoading(false))

            
    } catch (error) {
       throw Error(`heppend error by getting scenes!  ${error}`) 
    }
     
}
