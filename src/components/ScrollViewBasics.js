import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

class ScrollViewBasics extends Component {
  render() {
    return (
      <ScrollView pagingEnabled={true}>
        <Text style={{fontSize: 50}}>Scroll Me !!</Text>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Text style={{fontSize: 50}}>If you like !!</Text>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Text style={{fontSize: 50}}>Scrolling down !</Text>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
        <Image source={require('../assets/images/postman_icon.png')}/>
      </ScrollView>
    )
  }
}

export default ScrollViewBasics;
