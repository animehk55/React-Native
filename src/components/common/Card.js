import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
          {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 10,
        borderRadius: 50,  // change this value many times to get different look
        borderColor: 'white',
        borderBottomWidth: 8,
        shadowColor: 'black',
        shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };