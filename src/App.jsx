import React, { Component } from 'react'
import logo from './assets/react.svg'
export class App extends Component{
  state = {
    count:0
  }
  render(){
    return(
      <div className="flex flex-col justify-center items-center gap-y-6 h-screen">
        <img src={logo} className='w-40 cursor-pointer'alt='react-logo'/>
        <h1 className='font-bold text-2xl underline'>This is React-101</h1>
        <button type='button' 
        onClick={() => this.setState({ count: this.state.count + 1 })}
        className='block text-lg text-white bg-green-600 p-3 rounded-lg'
        >Count is : {this.state.count}</button>
        <button type='button' 
        onClick={() => this.setState({ count: this.state.count = 0 })}
        className='block text-lg text-white bg-red-600 p-3 rounded-lg'
        >Reset</button>
      </div>
    )
  }
}
export default App