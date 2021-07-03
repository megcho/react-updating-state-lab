// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    handleClick = () => {
        let newClicks = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClicks
        })}
    
    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        );
    }
}