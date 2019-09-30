import Axios from 'axios'
import * as Action from '../actions/BooklistAction'

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export function getBookData(param){
    let full_url = BASE_URL + param;
    console.log(full_url)
    Action.loadingGetData();
    Axios.get(full_url).then((Response) => {
        Action.successGetData(Response)
    })
    .catch((error) => {
        Action.failedGetData(error)
    })
}
