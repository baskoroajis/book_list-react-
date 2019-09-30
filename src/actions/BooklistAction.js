export const IS_LOADING = 'IS_LOADING';
export const IS_SUCCESS = 'IS_SUCCESS';
export const IS_FAILED = 'IS_FAILED';


export function successGetData(result){
    return {
        data : result,
        type : IS_SUCCESS
    }
}

export function loadingGetData(){
    return{
        type : IS_LOADING
    }
}

export function failedGetData(error){
    return{
        type: IS_FAILED,
        error : error
    }
}

