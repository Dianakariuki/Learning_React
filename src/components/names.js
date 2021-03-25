import React from 'react'

class Name extends React.Component{
  constructor(){
    super()
    this.state= {
      name: 6
    }
  }
  componentDidMount(){
    this.setState({
      name: 7
    })
  }
  render(){
    return(
      <div>
        <p className="lead">{this.state.name}</p>
      </div>
    )
  }
}

export default Name