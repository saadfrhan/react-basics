import React from 'react'
import './stateful.css'
const itemsList = [
    { id: 1, title: 'task 01', completed: false },
    { id: 2, title: 'task 02', completed: false },
    { id: 3, title: 'yet another task', completed: false },
    { id: 4, title: 'task item 03', completed: false },
    { id: 5, title: 'Later todo item', completed: false },
]
class EventHandling3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Passed itemsList to data property.
            data: [...itemsList]
        }
    }

    onTextUpdate(searchText) {
        // Implemented a filter functionality.  
        let matchingItems = itemsList.filter(({title}) => title.includes(searchText))
        // Updating the data.
        this.setState({ data: matchingItems })
    }

    render() {
        return <>
            <input
                type='text'
                placeholder='13) Search the list' class="btn result"
                // Implemented onTextUpdate function with the parameter having the target.value of input tag.
                onChange={(e) => { this.onTextUpdate(e.target.value) }}
            />

            <br />
            <br />
            <ul className="result">
                {this.state.data.map(({id, title}) => <li key={id} >{title}</li>)}
            </ul>
        </>
    }
}


export default EventHandling3;