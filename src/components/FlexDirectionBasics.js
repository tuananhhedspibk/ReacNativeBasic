import React, { Component } from 'react';
import { View } from 'react-native';

class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
      </View>
    )
  }
}

export default FlexDirectionBasics;
