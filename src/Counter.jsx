import React from "react"

export default class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.add = this.add.bind(this)
    }

    // a state without a constructor
    // state = {count: 0}


    // To use a method we need to bind it in the constructor
    add() {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    // An arrow method does not need a definition in the constructor
    subtract = () => {
        this.setState(prevState => ({ count: prevState.count - 1 }))
    }

    render() {


        return (
            <div className="counter">
                <button className="counter--minus" onClick={this.subtract}>–</button>
                <div className="counter--count">
                    <h1>{this.state.count}</h1>
                </div>
                <button className="counter--plus" onClick={this.add}>+</button>
            </div>
        )

    }
}
