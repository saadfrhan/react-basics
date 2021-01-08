import React from 'react';
import './stateful.css';
import ToDo from './todo';

const list = [
    {
        title: 'React',
        objectID: 1,
    },
    {
        title: 'Redux',
        objectID: 2,
    },
];

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: list,
            counter: 1
        }
    }
    
    addNewJSLibrary() {
        let newLibName = prompt("Please enter you new JS Library name")
        if (newLibName) {
            console.log("New entered name is " + newLibName)
            let newLibObj = {
                id: this.state.data.length + 1,
                title: newLibName + "~ value added"
            }
            let newDataState = [...this.state.data, newLibObj]
            this.setState({ data: newDataState })
        }
    }

    increaseCount() {
        let current = this.state.counter;
        this.setState({ counter: current + 1 })
    }

    decreaseCount() {
        let current = this.state.counter;
        this.setState({ counter: current - 1 })
    }

    render() {
        return (

            <div>
                {/* Using Code For Counter */}
                <h1 className="Head">6) The value of counter is {this.state.counter}</h1>

                {/* Declaring increaseCount() and decreaseCount() function in onClick attribute. */}
                <button
                    onClick={() => { this.increaseCount() }} className="btn counter">+</button>
                <button onClick={() => { this.decreaseCount() }} className="btn counter">-</button>

                {/*Using Code For Property Adder*/}
                <h1 className="Head">7) Property adder to an object.</h1>

                {/* Declaring addNewJSLibrary() function in onClick attribute. */}
                <button onClick={() => { this.addNewJSLibrary() }} className="btn">Click me to add new JSX element.</button>
                <br />
                <ToDo />
                <h1 className="Head">8) Printing title property of all index of list using this.state and map. </h1>
                <ul className="result">

                    {/* Printing title property of all index of list using this.state and map. */}
                    {this.state.data.map(d => <li>{d.title.toUpperCase()}</li>)}

                </ul>

                <h1 className="Head">9) Printing title property of one index of list using this.state. </h1>

                {/* Printing title property of one index of list using this.state. */}
                <p className="result">{this.state.data[0].title}</p>


            </div>
        )
    }
}

export default StatefulComponent;