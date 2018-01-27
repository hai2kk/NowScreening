import React,{Component} from 'react';
import {View,Text} from 'react-native';

const MovieSection = function(props){

    var {viewStyle} = movieSectionStyles;

    return(
        <View style={movieSectionStyles.viewStyle}> 
            {props.children}
        </View>
    )
};

const movieSectionStyles = {
    viewStyle : {
        borderBottomWidth : 1,
        padding : 5,
        backgroundColor : '#fff',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        borderColor : '#ddd',
        position : 'relative'
    }
}



export default MovieSection;
