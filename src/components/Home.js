import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Header from "./Header.js";
import MovieDetailList from "./MovieDetailList.js";

class Home extends React.Component {
  /*  static navigationOptions = {
    header: { visible:false }
  };  */

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
      },
      welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
      },
      instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
      }
    });

    const { textStyle, viewStyle } = styles;
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Header displayLabel={"Now Screening"} />
        <MovieDetailList navigate={navigate} />
      </View>
    );
  }
}
export default Home;
