import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        console.log('Bhosre Chod, zaldi nahi ho raha tha kaya');
        // debugger;
            axios.get('http://rallycoding.herokuapp.com/api/music_albums')
                .then(response => this.setState({ albums: response.data }));
                console.log(this.state);
        }
    
    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} albumAlbum={album} />);
    }

    render() {
        console.log(this.state);
    return (
        <View>
            {/** console.log(this.state) */}
            {/** // why is this console not working and also by using this the running app
             is closed and no error is generated too */}
            <Text>MPSILU . . MPSILU . . MPSILU</Text>
            <Text>Notes: {'\n'}*. Defination of state : a plain Javascript object to record
             and respond o user-triggered events.{'\n'}*. When we need to update what a 
             component shows, call 'tis.setState'{'\n'}*. Only change state with 'setState',
             do not do 'this.state = 123'{'\n'}*. Conclusion: {'\n'}Whenever we want to communicate 
             from a parent component to a child component we use props, so props is from parent
             to child communication. {'\n'}While state is for component internal record keeping 
             that is the purpose of state we use state whenever we want to update some amount of 
             data over time whenever we pass data from a parent to child then we use props. 
             {'\n'}We can use state only in class based component. Functional components does 
             not have access to state{'\n'} {'\n'} 
            map() is an array helper, working of map() is we pass (as fat arrow function then
            inside the fat arrow function, our fat arrow funtion will be called  times before 
            each album we have loaded whatever we return from that funtion will be entered 
            into a new array){'\n'}  return this.state.albums.map(album => Text-tag
            BRACKETalbumdottitleCLOSINGBRACKET);  this.renderAlbums()
            </Text>
             {this.renderAlbums()}
        </View>
    );
    }
}