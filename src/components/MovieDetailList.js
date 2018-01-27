import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import movieConst from "../constants/MovieConstants.js";
import MovieItem from "./MovieItem.js";

class MovieDetailList extends Component {
  state = { movieDetails: [] };
  componentWillMount() {
    return axios
      .get(movieConst.API_URL)
      .then(response => this.setState({ movieDetails: response.data.results }));
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
