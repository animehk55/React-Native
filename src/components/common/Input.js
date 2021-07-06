import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput 
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
        />
        </View>
    );
};

const styles = {
    inputStyles: {
        color: 'red',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        
    },
    labelStyle: {
        fontSize: 50,
        flex: 1,
        paddingLeft: 20 ,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'black',
        borderRadius: 100,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        align: 'center'
    }
};

export { Input };
