import React,{Component} from 'react'
import Header from '../components/Header'
import BookItem from '../components/BookItem'
import Style from '../assets/styles/mainpage.module.css'
import {connect} from 'react-redux'
import {getBookData} from '../utils/BooklistAPI'
import {successGetData} from '../actions/BooklistAction'
import {bindActionCreators} from 'redux'
import Axios from 'axios'

class MainPage extends Component{

    constructor(props){
        super(props)
        console.log("test "+props.store)
        this.state = {
            isLoading : false,
            data : {},
            error :""
        }
      
        props.store.subscribe(() => {
            console.log("subscribe called ", props.store.getState())
        })
       
        this.handleButtonClick = this.handleButtonClick.bind(this)
        //this.props.store.dispatch(successGetData(result) => {})
    }

    handleButtonClick(menuClicked){
        console.log("handle button!!", menuClicked)
        Axios.get("https://www.googleapis.com/books/v1/volumes?q="+menuClicked).then((Response) => {
            // Action.successGetData(Response)
            this.props.store.dispatch({
                data : Response,
                type : 'IS_SUCCESS'
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevProps.data !== this.props.data) {
            // Do whatever you want
            console.log("update!!")
        }

    }

    render(){
        // console.log("render! "+JSON.stringify(this.store))
        // console.log("udpate!")
        // this.props.successGetData = () => {
        //     console.log("test dispatch called!")
        // }
        return(
            <div>
                <Header handleButtonClick={this.handleButtonClick}></Header>
                <div className={Style.bookcontainer}>
                    {
                        // this.state.data.map((e,i) =>{
                        //  //   console.log("e"+JSON.stringify(e))
                        //     return( <BookItem title={e.volumeInfo.title} author={e.volumeInfo.authors} thumbnail={e.volumeInfo.imageLinks.thumbnail}key={i}></BookItem>)
                        // })
                    }
                </div>
            </div>
        )
       
    }
}

// function mapStateToProps(state){
//     console.log("store "+state.store)
//     return {
//         data : state.data
//     }
// }
const mapStateToProps = (state) => ({ 
    data: state.data,
    // any props you need else
 });

function mapDispatch(dispatch){
    return bindActionCreators({successGetData},dispatch)
}

// export default MainPage;

export default connect(mapStateToProps)(MainPage)