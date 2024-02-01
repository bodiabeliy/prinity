
import { AppDispatch } from '@/providers/store';
import http from './api/index';
import { gettingScenessSuccess } from '@/providers/reducers/ScenesSlice';


 export const getScenes =async(dispatch:AppDispatch) => {
    
    try {        
        const response = await http.get(`/scenes`);    
        dispatch(gettingScenessSuccess(response.data))
            
    } catch (error) {
       throw Error(`heppend error by getting scenes!  ${error}`) 
    }
     
}
