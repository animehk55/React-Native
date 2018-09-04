import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ albumAlbum }) => {
    const { title, 
            artist, 
            thumbnail_image, 
            image 
          } = albumAlbum;
    const { thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyles
         } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
            <Text style={headerTextStyle}>
                {title}
                {artist}
            </Text>
            </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={imageStyles}
                    source={{ uri: image }} 
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'row', // not workig 
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyles: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;