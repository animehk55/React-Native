import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
    return (
        <Card>
            <Text>{props.albumAlbum.title}</Text>
        </Card>
    );
};

export default AlbumDetail;