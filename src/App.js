import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  }
  componentDidMount(){
    this.getMovies(); 
    // axios가 매우 느려서 js에게 getMovies 함수가 시간이 필요하다고 알려야함
    // 따라서 getMovies 함수에 async(비동기)을 달아주고, await을 axios 앞에 써줌
  }
  render(){ // java의 main같은 역할
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading...":"We are ready"}</div>
  }
}

export default App;