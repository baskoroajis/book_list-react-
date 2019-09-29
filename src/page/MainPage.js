import React,{Component} from 'react'
import Header from '../components/Header'
import BookItem from '../components/BookItem'
import Style from '../assets/styles/mainpage.module.css'

class MainPage extends Component{

    render(){
        return(
            <div>
                <Header></Header>
                <div className={Style.bookcontainer}>
                    <BookItem></BookItem>
                    <BookItem></BookItem>
                    <BookItem></BookItem>
                    <BookItem></BookItem>
                </div>
            </div>
        )
       
    }
}

export default MainPage;