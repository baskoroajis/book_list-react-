import React,{Component} from 'react'
import Header from '../components/Header'
import BookItem from '../components/BookItem'
import Style from '../assets/styles/mainpage.module.css'
import {connect} from 'react-redux'
import {getBookData} from '../utils/BooklistAPI'
import {successGetData} from '../actions/BooklistAction'
import {bindActionCreators} from 'redux'

class MainPage extends Component{

    constructor(props){
        super(props)
        console.log("test "+props.store)
        this.state = {
            isLoading : false,
            data : {},
            error :""
        }
      
        //this.props.store.dispatch(successGetData(result) => {})
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
                <Header></Header>
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