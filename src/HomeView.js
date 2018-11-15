import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ArtistList from './ArtistList';
import { getMusicData } from './api-client';

export default class HomeView extends Component<Props> {
    state = {
        artists: null
    }

    componentDidMount() {
        getMusicData().then(data => {
            this.setState({artists: data})
        })
    }

    render() {
        const artists = this.state.artists;
        console.warn(artists)

        return (
            <View style={styles.container}>
                {artists && <ArtistList artists={artists}/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    }
});