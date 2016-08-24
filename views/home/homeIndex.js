import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TabBarIOS,
  NavigatorIOS,
  Navigator

} from 'react-native';


var css = require('./../styles/CSS');
var HomeBuy = require('./homeBuy');

class HomeIndex extends React.Component{

  _navigate(name, type='Normal') {
  	this.props.navigator.push({
    	component: HomeBuy,
      passProps: {
      	name: name
      },
      type: type
    })
  }

  render() {
    return (
      <View style={ css.container }>
      	<Text style={ css.heading }>Hello from Main</Text>
 				<TouchableHighlight style={ css.button } onPress={ () => this._navigate('YOYOYOYOYO') }>
      		<Text style={ css.buttonText }>GO To Home</Text>
      	</TouchableHighlight>
				<TouchableHighlight style={ css.button2 } onPress={ () => this._navigate('WOWOWOWO', 'Modal') }>
      		<Text style={ css.buttonText }>Show Modal</Text>
      	</TouchableHighlight>
      </View>
    )
  }
}

module.exports = HomeIndex;
