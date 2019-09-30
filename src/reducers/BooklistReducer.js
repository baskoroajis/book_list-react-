import {IS_FAILED,IS_SUCCESS,IS_LOADING} from '../actions/BooklistAction.js';

const initialState = {
    data : {},
    isLoading : false,
    error : ''
}


export function bookData (state = initialState, action){
    console.log("reducer state "+action.type)

    switch(action.type){
        case(IS_LOADING):{
            return {
                ...state,
                loading : true,
                error : ''
            };
        }
        case(IS_SUCCESS):{
            return {
                ...state,
                loading : false,
                data : action.data
            }
        }
        case(IS_FAILED):{
            return{
                ...state,
                loading : false,
                error : action.error
            }
        }
        default: {
            return state;
        }
       
    }

}
