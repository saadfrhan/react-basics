import React from 'react';
import './stateful.css'
class EventHandling1 extends React.Component {
    
    greetingForClick() {
        console.log("Hey, bro!")
    }
    
    render() {
        return <>
            <button onClick={() => { this.greetingForClick() }} className="btn result">11) Click me, yet another time.</button>
        </>
    }
}

export default EventHandling1;