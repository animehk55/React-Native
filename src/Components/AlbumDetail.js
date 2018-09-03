import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
            <Text>
                {props.albumAlbum.title}
            </Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;