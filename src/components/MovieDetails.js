import React, { Component } from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import movieConst from "../constants/MovieConstants.js";
import Rating from "./Rating";

class MovieDetails extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    //title: `${navigation.state.params.original_title}`
  });

  render() {
    const movieDetail = this.props.navigation.state.params;
    const imageURI = `${movieConst.IMAGE_URL}${movieDetail.poster_path}`;
    //  console.log(params.overview);

    const styles = {
      overviewStyle: {
        fontSize: 12,
        color: "#000814"
      },
      detailsViewStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: 5,
        marginTop : 15

      },
      titleStyle: {
        flexDirection: "row",
        fontSize: 21,
        justifyContent: "space-around",
        marginLeft: 5
      },
      ImageStyle: {
        height: 300,
        width: 450
      },
      viewStyle: {
        height: 300,
        width: 450
      }
    };

    return (
      <View style={styles.viewStyle}>
        <Image style={styles.ImageStyle} source={{ uri: imageURI }} />
        <Text style={styles.titleStyle}>{movieDetail.original_title}</Text>
        <Rating itemRating={movieDetail.vote_average} overAllRating={10} />
        <Text style={styles.detailsViewStyle}>
          {movieDetail.vote_average}/10
        </Text>
        <Text style={styles.detailsViewStyle}>{movieDetail.overview}</Text>
      </View>
    );
  }
}
export default MovieDetails;
