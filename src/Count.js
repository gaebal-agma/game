import React, { Component } from 'react';

class Count extends Component{
    state = { number: 0 }; 
    Increase = () => { 
        this.setState({ 
            number: this.state.number + 1 
        }); 
    }; 
    render(){
        const { number } = this.state; 
        const {Increase} = this;
        return( 
        <div>
        <h1>count : {number}</h1> 
        <button id="count_btn" onClick={Increase}>+</button> 
        </div>
        );
    }
}
export default Count;