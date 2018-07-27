import React, { Component } from 'react';
import { View } from 'react-native';

class AlignItemsBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
      </View>
    )
  }
}

export default AlignItemsBasics;
