
import { AppDispatch } from '@/providers/store';
import http from './api/index';
import { gettingScenessSuccess, isScenesLoading } from '@/providers/reducers/ScenesSlice';


 export const getScenes =async(dispatch:AppDispatch) => {
    try {        
        setTimeout(async() => {
            dispatch(isScenesLoading(true))

            const response = await http.get(`/scenes`);    
        dispatch(gettingScenessSuccess(response.data))
        dispatch(isScenesLoading(false))

        }, 3000);
            
    } catch (error) {
       throw Error(`heppend error by getting scenes!  ${error}`) 
    }
     
}
