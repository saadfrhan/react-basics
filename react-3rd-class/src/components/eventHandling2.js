import React from 'react';
import './stateful.css'
class EventHandling2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uName: ''
        }
    }

    onTextUpdate(enteredUserName) {
        this.setState({ uName: enteredUserName })

    }

    render() {
        return <>
            <h1 className="Head">12) Hi {this.state.uName}!</h1>
            <input
                type="text" className="btn result"
                placeholder="Type something or its a trap!"
                onChange={(e) => { this.onTextUpdate(e.target.value) }} />
        </>
    }
}

export default EventHandling2;