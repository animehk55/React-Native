import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View>
            <View style={viewStyle}>
                <Text style={textStyle}>
                    {props.headerText}
                </Text>
            </View>       
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        borderWidth: 0,
        borderRadius: 0,
        borderColor: 'red',
        borderBottomWidth: 0.1,
        shadowColor: 'yellow',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 10,
        // shadowRadius: 10,
        elevation: 3,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
};

export { Header };