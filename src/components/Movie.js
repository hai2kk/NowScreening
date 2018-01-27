import React,{Component} from 'react';
import {View,Text} from 'react-native';

const Movie = function(props){
    const {textStyle,viewStyle} = styles;
    return(
        <View style={viewStyle}> 
            {props.children}
        </View>
    );
}

const styles = {
    viewStyle : {
        borderWidth : 1,
        borderRadius : 2,
        borderColor : '#ddd',        
    }
}


export default Movie;