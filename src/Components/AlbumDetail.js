import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ albumAlbum }) => {
    const { title, 
            artist, 
            thumbnail_image, 
            image,
            url
          } = albumAlbum;
    const { thumbnailStyle,
            headerContentStyle,
            headerTextStyle,
            thumbnailContainerStyle,
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
                {title} {'\n'}
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
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'row', // not workig 
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
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