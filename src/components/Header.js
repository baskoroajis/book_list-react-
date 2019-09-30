import React from 'react'
import '../assets/styles/header.css'
import { getBookData } from '../utils/BooklistAPI'


const Header = () => {

    
    function getData(param){
        console.log("get data html clicked!");
        getBookData(param)
    }

    return(
       <nav>
          <ul >
              <li><a href="#" onClick={() => {getData("HTML")}}>HTML</a></li>
              <li><a href="#" onClick={() => {getData("CSS")}}>CSS</a></li>
              <li><a href="#" onClick={() => {getData("Javasript")}}>Javascript</a></li>
              <li><a href="#" onClick={() => {getData("React")}}>React</a></li>
              <li><a href="#" onClick={() => {getData("Node js")}}>Nodejs</a></li>
          </ul>
       </nav> 
    )
}


export default Header;


