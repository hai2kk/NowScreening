import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Platform, StyleSheet, Text, View } from "react-native";

import Home from "./src/components/Home.js";
import MovieDetails from "./src/components/MovieDetails.js";

export default class App extends React.Component {
  render() {
    return <Routes />;
  }
}

const Routes = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: MovieDetails
  }
});
