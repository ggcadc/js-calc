import React, { Component } from 'react'

class Buttons extends Component {
  pressed(numbers) {
    let probArr = []
    return probArr;
  }
  render (){
    return(
      <div className="button-grid">
        <div className="toprow">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          </div>
        <div className="midrow">
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div className="bottomrow">
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div className="zero">
          <button>0</button>
        </div>
        <div className="functions">
          <button>CLR</button>
          <button>+</button>
          <button>-</button>
        </div><div className="functions">
          <button>X</button>
          <button>/</button>
          <button>=</button>
        </div>
      </div>

  )}
}

export default Buttons;
