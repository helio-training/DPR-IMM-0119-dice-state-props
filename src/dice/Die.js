import React, { Component } from 'react'

export default class extends Component {
    state = {
        currentRoll: 0,
        history: []
    }
    rollDie = () => {
        const result = Math.ceil(Math.random() * this.props.sideCount)
        const historyUpdate = this.state.history
        historyUpdate.push(result)
        this.setState({ currentRoll : result, history : historyUpdate })
    }
    render() {
        return (
            <div>
                <h4>Sides: {this.props.sideCount}</h4>
                <h4>Current Roll: {this.state.currentRoll}</h4>
                <h4>History: {this.state.history.join(', ')}</h4>
                <input type="button" value="Roll" onClick={this.rollDie}/>
                <hr />
            </div>
        )
    }
}