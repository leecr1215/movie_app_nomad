
import React from 'react';
import PropTypes from "prop-types";


class App extends React.Component {
  state = {
    count: 0
  };
  // current가 this.state를 대신함. 현재의 state를 가져옴
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count -1}));
  };
  render(){ // java의 main같은 역할
    return (<div>
      <h1>The number is:  {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
