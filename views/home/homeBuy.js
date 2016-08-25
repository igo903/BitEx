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
  Navigator

} from 'react-native';


var css = require('./../styles/CSS');
var NavTop = require('./../navTop');

class HomeBuy extends React.Component{

  render(){
    return(



      <View style={ [css.view] }>
      	<Text style={ css.heading }>Hello from { this.props.name }</Text>
 				<TouchableHighlight style={ css.button } onPress={ () => this.props.navigator.pop() }>
      		<Text style={ css.buttonText }>GO Back</Text>
      	</TouchableHighlight>
      </View>
    )
  }
}


module.exports = HomeBuy
