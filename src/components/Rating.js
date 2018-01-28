import React, { Component } from "react";
import { View, Image, ImageEditor } from "react-native";

const Rating = function(props) {
  let { itemRating, overAllRating } = props;
  itemRating = Math.floor(itemRating);
  const imageStyle = { height: 15, width: 15 };
  const viewStyle = {
    flexDirection: "row",
    flexWrap: "wrap"
  };
  let imgArr = [];
  for (let i = 0; i < itemRating; i++) {
    imgArr.push(
      <View key={i}>
        <Image
          key={i}
          style={imageStyle}
          source={require("../images/star_blue_full.png")}
        />
      </View>
    );
  }
  for (let j = overAllRating; j > itemRating; j--) {
    imgArr.push(
      <View key={j}>
        <Image
          key={j}
          style={imageStyle}
          source={require("../images/star_blue_empty.png")}
        />
      </View>
    );
  }
  return <View style={{ flex: 2, flexDirection: "row" }}>{imgArr}</View>;
};

export default Rating;
