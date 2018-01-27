import React from 'react';
import {Text, View} from 'react-native';

const Header = function(props){

    const {textStyle, viewStyle} = styles;
    return (
            <View style={viewStyle}>
                <Text style={textStyle}>{props.displayLabel}</Text>
            </View>    
    );

}

const styles = {
    viewStyle : {
        backgroundColor : '#0066cc',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        shadowColor : '#0000cc',
        shadowOffset : {width : 0, height : 20},
        shadowOpacity : 0.2,
        marginBottom: 10
    },
    textStyle : {
        fontSize : 20,
        fontWeight : 'bold',
        color : 'white',
        marginTop: 20
    }
}

export default Header;