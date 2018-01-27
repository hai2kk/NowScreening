import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import movieConst from "../constants/MovieConstants.js";
import MovieItem from "./MovieItem.js";

class MovieDetailList extends Component {
  state = { movieDetails: [] };
  componentWillMount() {
    return axios.get(movieConst.API_URL).then(response => {
      const movieDataArr = response.data.results;
      movieDataArr.sort(compare);
      console.log(JSON.stringify(movieDataArr));
      this.setState({ movieDetails: movieDataArr });
    });
    //.then(response => this.setState({ movieDetails: response.data.results }));

    function compare(obj1, obj2) {
      if (obj1.release_date < obj2.release_date) return 1;
      if (obj1.release_date > obj2.release_date) return -1;
      return 0;
    }
  }

  renderMovieDetails() {
    return this.state.movieDetails.map(movieDetail => (
      <MovieItem
        key={movieDetail.id}
        movieDetail={movieDetail}
        navigate={this.props.navigate}
      />
    ));
    //return this.state.movieDetails.map(movieDetail => <Text key={movieDetail.id}>{movieDetail.title}</Text>);
  }

  render() {
    return <ScrollView>{this.renderMovieDetails()}</ScrollView>;
  }
}

export default MovieDetailList;
