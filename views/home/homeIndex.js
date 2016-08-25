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
var MyHomeBuy = require('./homeBuy');

var pages = {};
pages["HomeBuy"] = require('./homeBuy');


class HomeIndex extends React.Component{

  _navigate(name, type='Normal') {
    console.log(name);
  	this.props.navigator.push({
    	component: MyHomeBuy,
      passProps: {
      	name: name
      },
      type: type
    })
  }

  linkTo(funCode,funName, type="Normal"){
    this.props.navigator.push({
      component: pages[funCode],
      passProps: {
        name: funName
      },
      type: type
    })
  }

  render() {
    return (
      <View style={ css.container }>
      	<Text style={ css.heading }>Hello from Main</Text>
 				<TouchableHighlight style={ css.button } onPress={ () => this.linkTo("HomeBuy","积分买入") }>
      		<Text style={ css.buttonText }>GO To Home</Text>
      	</TouchableHighlight>
				<TouchableHighlight style={ css.button2 } onPress={ () => this._navigate('homeBuy', 'Modal') }>
      		<Text style={ css.buttonText }>Show Modal</Text>
      	</TouchableHighlight>
      </View>
    )
  }
}

module.exports = HomeIndex;
