/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';

import MyScene from './MyScene';
import SimpleNavigationApp from './SimpleNavigationApp';
var css = require('./views/Styles/CSS');

class BitEx extends Component {

  /* PLAY AROUND WITH ANY OF THESE CONFIGURATIONS:
    PushFromRight
    FloatFromRight
    FloatFromLeft
    FloatFromBottom
    FloatFromBottomAndroid
    FadeAndroid
    HorizontalSwipeJump
    HorizontalSwipeJumpFromRight
    VerticalUpSwipeJump
    VerticalDownSwipeJump */

    renderScene(route, navigator) {
      return <route.component navigator={navigator} {...route.passProps} />
    }

    configureScene(route, routeStack){
      if(route.type == 'Modal') {
    	   return Navigator.SceneConfigs.FloatFromBottom
    }
      return Navigator.SceneConfigs.PushFromRight
    }


  render() {
    return (
      <Navigator
      	configureScene={ this.configureScene }
      	style={{ flex:1 }}
        initialRoute={{ component: Main }}
        renderScene={ this.renderScene } />
    );
  }
}


var Main = React.createClass({
  _navigate(name, type='Normal') {
  	this.props.navigator.push({
    	component: Home,
      passProps: {
      	name: name
      },
      type: type
    })
  },


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
})


var Home = React.createClass({
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
})









AppRegistry.registerComponent('BitEx', () => BitEx);
