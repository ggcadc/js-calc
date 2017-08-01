import React from 'react'

class Display extends React.Component {
  constructor() {
    super()
  }
  render (){
    return(
    <div className="display">
      <div className="screen">
        <p className="dataOut">{this.props.calcState}</p>
      </div>
    </div>
  )}
}


export default Display;
