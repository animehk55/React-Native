import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View></View>
                <View style={styles.headerContentStyle}>
            <Text>
                {props.albumAlbum.title}
                {props.albumAlbum.artist}
            </Text>
            </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column-reverse',
        justifyContent: 'space-around',
    }
};

export default AlbumDetail;