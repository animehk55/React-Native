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
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        paddingTop: 0,
        borderWidth: 0,
        borderRadius: 0,
        borderColor: 'red',
        borderBottomWidth: 2,
        // shadowColor: 'red',
        // shadowOffset: { width: 80, height: 20 },
        // shadowOpacity: 0.5,
        // shadowRadius: 10,
        // elevation: 20,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 10
    },
    textStyle: {
        fontSize: 25
    }
};

export default Header;