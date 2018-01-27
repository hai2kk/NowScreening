import React, { Component } from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import movieConst from "../constants/MovieConstants.js";

class MovieDetails extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.original_title}`
  });

  render() {
    const movieDetail = this.props.navigation.state.params;
    const imageURI = `${movieConst.IMAGE_URL}${movieDetail.poster_path}`;
    //  console.log(params.overview);

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
        ImageStyle: {
          height: 300,
          width: 450
        }
    };

    return (
      <View>
        <Image style={styles.ImageStyle} source={{ uri: imageURI }} />
        <Text>{movieDetail.overview}</Text>
      </View>
    );
  }
}
export default MovieDetails;
