import React, { Component } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';

class FetchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function() {

        })
        .catch((error) => {
          console.log(error);
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{padding: 50}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{padding: 50}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}/>
      </View>
    )
  }
}

export default FetchExample;
