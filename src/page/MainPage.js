import React,{Component} from 'react'
import Header from '../components/Header'
import BookItem from '../components/BookItem'
import Style from '../assets/styles/mainpage.module.css'
import {getBookData} from '../utils/BooklistAPI'

class MainPage extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoading : false,
            data : [],
        }
    }

    callData(searchParam){
        // getBookData(searchParam).then((response) => {
        //     this.setState({
        //         data : response.data.items
        //     })

        //     console.log(this.state.data)
        // });
    }

    componentDidMount(){
        this.callData("Html");
    }

    render(){
        return(
            <div>
                <Header></Header>
                <div className={Style.bookcontainer}>
                    {
                        this.state.data.map((e,i) =>{
                         //   console.log("e"+JSON.stringify(e))
                            return( <BookItem title={e.volumeInfo.title} author={e.volumeInfo.authors} thumbnail={e.volumeInfo.imageLinks.thumbnail}key={i}></BookItem>)
                        })
                    }
                </div>
            </div>
        )
       
    }
}

export default MainPage;