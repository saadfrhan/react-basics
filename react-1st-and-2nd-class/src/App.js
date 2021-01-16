import './App.css';
import React from 'react';
import UserName from './components/items/index';
import MTA from './components/mta';
import StatefulComponent from './components/statefulComponent';
import Quote from './components/nameProp';

function App() {
  // Code for #9.
  var todayQuote = "Do or do not. There is no try.";

  // Code for #1.
  const msg = "Hi bro."

  // Code for #2.
  const list = [
    {
      title: 'React',
      url: 'https://facebook.github.io/react/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  return (
      <div className="back">
        {/* #1 */}
        <h1>1) Printing the value of a const.</h1>
        <p>{msg}</p>

        {/* #2 */}
        <h1>2) Printing the title property of every index of object.</h1>
        <p>
          <ul>
            <li>{list[0].title}</li>
            <li>{list[1].title}</li>
          </ul>
        </p>

        {/* #3 */}
        <h1>3) Printing the title and url property of every index of object using .map().</h1>
        <p><ul>
          { list.map(data => {
            return (
            <span><li>{data.title}</li> <li>{data.url}</li></span>)
          })}
        </ul></p>

        {/* {#4} */}
        <h1>4) Using a class-based component from another file.</h1>
        <UserName />

        {/* #5 */}
        <h1>5) Using another class-based component from another file.</h1>
        <p><MTA /></p>

        <StatefulComponent />

        {/* #10 */}
        <h1>10) Using Props. </h1>
        <p><Quote quote={todayQuote} /></p>
      </div>
  );
}

export default App;
