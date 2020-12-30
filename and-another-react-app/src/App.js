import React from 'react';
import EventHandling1 from './components/eventHandling1';
import EventHandling2 from './components/eventHandling2';
import EventHandling3 from './components/eventHandling3';
import './App.css';
// import User from './components/users/users'
import BorderedBox from './components/borderedbox'
import Search from './components/searchField';
// import CollapsibleItem from './components/colapsableItem'
const btnStyle = {
  color: "white"
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      searchText: ''
    }
    this.whenButtonClicked = this.whenButtonClicked.bind(this)
  }

  textValue(event) {
    this.setState({
      searchText: event.target.value
    })
  }

  whenButtonClicked() {
    console.log(this);
    console.log(this.state.date)
  }

  clearTextField() {
    this.setState({
      searchText: " "
    })
  }

  render() {
    const { searchText } = this.state
    console.log(this.state.searchText)
    return <div className="back">

      <br />
      <EventHandling1 />
      <br />
      <br />

      <BorderedBox>
        <EventHandling2 />
      </BorderedBox>
      <br />
      <br />

      <EventHandling3 />
      <br />
      <br />

      <BorderedBox>
        <h1>Maria Baji is very kindful teacher of Islam.</h1>
      </BorderedBox>
      <br />
      <br />
      <h1>15) Hi from App component.</h1>

      <button
        onClick={() => { this.whenButtonClicked() }}
        className="btn"
      >
        16) Click me to explore
      </button>

      <h1>
        17) Today is {this.state.date.toString()}.
        </h1>

      <Search
        value={searchText}
        onChange={(e) => { this.textValue(e) }}
      />

      <button
        onClick={() => { this.clearTextField() }}
        className="btn"
        style={btnStyle}
      >
        Clear all
        </button>
    </div>
  }
}

export default App;