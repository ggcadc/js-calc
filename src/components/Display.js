import React, { Component } from 'react'
import { pressed } from './Buttons'

class Display extends Component {
  render (){
    return(
    <div className="display">
      <div className="screen">
        <p className="dataOut">Calculate Things<span className="blink">:</span></p>
      </div>
    </div>
  )}
}

export default Display;
