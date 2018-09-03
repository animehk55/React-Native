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
    ContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'red',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadoeOffset: { width: 0, height: 2 },
        shadoeOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;