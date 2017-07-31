import React from 'react'

let probArray = [];

class Buttons extends React.Component {

  pushedButtons(event, num) {
    event.preventDefault();

    if(typeof num === 'number'){
      if(probArray[0] && probArray.length === 1)
      num = Number(probArray[0].toString() + num.toString())
      probArray[0] = num
    }
    if(typeof num === 'string'){

      probArray.push(num)
    }
    console.log(probArray);
  }

  render (){

    return(
      <div className="button-grid">
        <form className="calcButtons">
          <div className="toprow">
            <button onClick={(e) => this.pushedButtons(e, 1)}>1</button>
            <button onClick={(e) => this.pushedButtons(e, 2)}>2</button>
            <button onClick={(e) => this.pushedButtons(e, 3)}>3</button>
            </div>
          <div className="midrow">
            <button onClick={(e) => this.pushedButtons(e, 4)}>4</button>
            <button onClick={(e) => this.pushedButtons(e, 5)}>5</button>
            <button onClick={(e) => this.pushedButtons(e, 6)}>6</button>
          </div>
          <div className="bottomrow">
            <button onClick={(e) => this.pushedButtons(e, 7)}>7</button>
            <button onClick={(e) => this.pushedButtons(e, 8)}>8</button>
            <button onClick={(e) => this.pushedButtons(e, 9)}>9</button>
          </div>
          <div className="zero">
            <button onClick={(e) => this.pushedButtons(e, 0)}>0</button>
          </div>
          <div className="functions">
            <button onClick={(e) => this.pushedButtons(e, 'CLR')}>CLR</button>
            <button onClick={(e) => this.pushedButtons(e, '+')}>+</button>
            <button onClick={(e) => this.pushedButtons(e, '-')}>-</button>
          </div>
          <div className="functions">
            <button onClick={(e) => this.pushedButtons(e, 'x')}>X</button>
            <button onClick={(e) => this.pushedButtons(e, '/')}>/</button>
            <button onClick={(e) => this.pushedButtons(e, '=')}>=</button>
          </div>
        </form>
      </div>

  )}
}

export default Buttons;
