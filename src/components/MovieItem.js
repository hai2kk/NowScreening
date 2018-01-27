import React, { Component } from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import Movie from "./Movie.js";
import MovieSection from "./MovieSection.js";
import movieConst from "../constants/MovieConstants.js";

const MovieItem = function(props) {
  const movieDetail = props.movieDetail;
  const {
    mainTitleStyle,
    titleStyle,
    overviewStyle,
    detailsViewStyle,
    overviewViewStyle,
    thumbNailStyle
  } = styles;

  const imageURI = `${movieConst.IMAGE_URL}${movieDetail.backdrop_path}`;
  const { title, release_date, overview, vote_average } = movieDetail;
  const navigate = props.navigate;
  console.log(imageURI);
  return (
    <TouchableOpacity
      onPress={() => {
        navigate("Detail",movieDetail);
      }}
    >
      <Movie>
        <MovieSection>
          <View>
            <Image style={thumbNailStyle} source={{ uri: imageURI }} />
          </View>
          <View style={detailsViewStyle}>
            <Text style={mainTitleStyle}>{title}</Text>
            <Text style={titleStyle}>{vote_average}*</Text>
            <Text style={titleStyle}>{release_date}</Text>
          </View>
        </MovieSection>
        <MovieSection>
          <View style={overviewViewStyle}>
            <Text numberOfLines={2} style={overviewStyle}>
              {overview}
            </Text>
          </View>
        </MovieSection>
      </Movie>
    </TouchableOpacity>
  );
};

const styles = {
  mainTitleStyle: {
    fontSize: 18,
    color: "#010a16",
    paddingLeft: 10
  },
  titleStyle: {
    fontSize: 12,
    color: "#010a16",
    paddingLeft: 10
  },
  overviewStyle: {
    fontSize: 12,
    color: "#000814"
  },
  detailsViewStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  overviewViewStyle: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  thumbNailStyle: {
    height: 90,
    width: 90
  }
};

export default MovieItem;
