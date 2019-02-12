import React, { Component } from 'react'
import Die from './Die'

export default class extends Component {
    state = {
        dice: [ 6, 8, 10, 12, 20, 100 ]
    }
    render() {
        const displayDice = this.state.dice.map(count => <Die sideCount={count}/>)
        return (
            <div>
                <h2>{this.props.message}</h2>
                {displayDice}
            </div>
        )
    }
}