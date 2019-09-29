import React from 'react'
import BookStyle from "../assets/styles/bookitem.module.css"

const BookItem = (props) => {
    return (
        <div className={BookStyle.container}>
            <div className={BookStyle.imagecontainer} > <img src={props.thumbnail}></img></div>
            <div className={BookStyle.bottomcontainer}> 
                <div><label>{props.title}</label></div>
                <div><label>By {props.author}</label></div>
                <div><button>Details</button></div>
            </div>
        </div>
    );
}

export default BookItem;