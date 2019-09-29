import React from 'react'
import BookStyle from "../assets/styles/bookitem.module.css"

const BookItem = () => {
    return (
        <div className={BookStyle.container}>
            <div className={BookStyle.imagecontainer} > <img src="./logo.svg"></img></div>
            <div className={BookStyle.bottomcontainer}> 
                <div><label>Book title</label></div>
                <div><label>By Author</label></div>
                <div><button>Details</button></div>
            </div>
        </div>
    );
}

export default BookItem;