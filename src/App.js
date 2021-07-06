
import React from 'react';
import PropTypes from "prop-types";


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
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
  componentDidMount() { // 처음 함수 실행 시 setstate()->render()->얘 호출됨
    console.log("component rendered");
  }
  componentDidUpdate(){ // 업데이트시 render() 호출 후 호출됨
    console.log("I just updated");
  }
  componentWillUnmount(){ // 창 이동시 render() 호출 후 호출
    console.log("Goodbye, cruel world");
  }
  render(){ // java의 main같은 역할
    console.log("I'm rendering");
    return (<div>
      <h1>The number is:  {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
