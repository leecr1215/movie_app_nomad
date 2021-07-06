import React from 'react';
import axios from 'axios';
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: { data :{ movies }}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false })  // state의 movie: axios의 movie
  }
  componentDidMount(){
    this.getMovies(); 
    // axios가 매우 느려서 js에게 getMovies 함수가 시간이 필요하다고 알려야함
    // 따라서 getMovies 함수에 async(비동기)을 달아주고, await을 axios 앞에 써줌
  }
  render(){ // java의 main같은 역할
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading...": movies.map(movie => {
      console.log(movie);
      return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
    })}</div>;
  }
}

export default App;