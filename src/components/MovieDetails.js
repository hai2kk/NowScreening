import React, { Component } from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";

class MovieDetails extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  /* static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  }); */

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.original_title}`
  });

  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    console.log(params.overview);
    /* return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    ); */

    return (
        <View>
          <Text>{params.overview}</Text>
        </View>
      );
  }
}
export default MovieDetails;