    import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonStyle}> 
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        textAlign: 'center',
        color: '#007aff',
        fontSize: 16,
        fontweight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
 
    buttonStyle: {
        flex: 1,
         //not working alignSelf as it will span the whole area 
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;