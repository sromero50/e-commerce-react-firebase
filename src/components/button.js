import React from 'react'
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button'
const Btn = (props) => {


    return (


            <Link to={props.url}><Button  variant="warning" size="lg" style={{margin:"3px" }}>{props.text}</Button ></Link>


    )
}

export default Btn