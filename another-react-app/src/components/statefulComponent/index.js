import React from 'react';
import './stateful.css';
// Created an Object and named it list.
const list = [
    {
        title: 'React',
        objectID: 0,
    },
    {
        title: 'Redux',
        objectID: 1,
    },
];

// Created a stateful component
class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);

        // Passed list object to a property.
        this.state = {
            data: list,

            // Added counter property and give it 1 as a value.
            counter: 1
        }
    }

    // Created a function named addNewJSLibrary()
    addNewJSLibrary() {

        // Created a variable that will ask the user to enter a value for a new title property.
        let newLibName = prompt("Please enter you new JS Library name")

        // Passed newLibName var as a parameter to the if statement.
        if (newLibName) {

            // Showing the value of newLibName in console.
            console.log("New entered name is " + newLibName)

            // Created newLibObj that contains the indexes of data and also an extra index and will add newLibName as the new title property's value.
            let newLibObj = {
                id: this.state.data.length + 1,
                title: newLibName
            }

            // Created a let that contains the list and newLibObj that contains the extra indexes.
            let newDataState = [...this.state.data, newLibObj]

            // Storing newDataState to the data that contains list.
            this.setState({ data: newDataState })
        }
    }

    // Created function for increasing number.
    increaseCount() {

        // Creating a let that contains current state of counter property.
        let current = this.state.counter;

        // Updating the value of the counter property by increasing current by 1 and storing it to counter property.
        this.setState({ counter: current + 1 })
    }

    // Created function for decreasing number.
    decreaseCount() {

        // Creating a let that contains current state of counter property.
        let current = this.state.counter;

        // Updating the value of the counter property by decreasing current by 1 and storing it to counter property.
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