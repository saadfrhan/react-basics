import React from 'react';

const list = [
    {
        title: "task 01"
    },
    {
        title: "task 02"
    }
]
class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: list, counter: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log("New entered name is " + this.state.value)
        let newLibObj = {
            id: this.state.value.length + 1,
            title: this.state.value + "~ task added"
        }
        let newDataState = [...this.state.value, newLibObj]
        this.setState({ value: newDataState })
        event.preventDefault();
    }
    increaseCount() {
        let current = this.state.counter;
        this.setState({ counter: current + 1 })
    }
    render() {
        return <><ul className="result">

            {/* Printing title property of all index of list using this.state and map. */}
            {this.state.value.map(d => <li>{d.title}</li>)} </ul>

            <form onSubmit={this.handleSubmit}>


                <label>
                    Taskname:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button type="submit" value="Submit" onClick={() => { this.increaseCount() }}>Add #{this.state.counter}</button>
            </form>

        </>
    }
}

export default ToDo;