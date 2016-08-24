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

class HomeIndex extends React.Component{

  render() {
    return (
      
    	<View style={ css.container }>
      	<Text style={ css.heading }>Hello from { this.props.name }</Text>
 				<TouchableHighlight style={ css.button } onPress={ () => this.props.navigator.pop() }>
      		<Text style={ css.buttonText }>GO Back</Text>
      	</TouchableHighlight>
      </View>
    )
  }
}

module.exports = HomeIndex;
