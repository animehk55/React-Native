import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}> 
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        textAlign: 'center',
        color: 'green',
        fontSize: 16,
        // fontweight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        // backgroundColor: '#F0FFFF',
        borderWidth: 0,
        borderRadius: 0,
        borderColor: 'red',
        // borderBottomWidth: 0,
        shadowColor: 'red',
        shadowOffset: { width: 100, height: 200 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,   //change this value to get different view
        marginLeft: 25,
        marginRight: 25,
        marginTop: 40
    }
};

export { Button };