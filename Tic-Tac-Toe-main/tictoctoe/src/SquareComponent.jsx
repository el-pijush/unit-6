
import React from "react"
import './App.css'

function SquareComponent(props) {
 
    const classes=props.className?`${props.className} square`:`square`

  return (
   <spam className={classes} onClick={props.onClick}>

       {props.state}
   </spam>
  );
}

export default SquareComponent;