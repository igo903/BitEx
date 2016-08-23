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


var css = require('./styles/CSS')
var HomeIndex = require('./home/homeIndex');


class Root extends React.Component{

  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
  }

  configureScene(route, routeStack){
    if(route.type == 'Modal') {
       return Navigator.SceneConfigs.FloatFromBottom
  }
    return Navigator.SceneConfigs.PushFromRight
  }

  render(){
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
    	component: HomeIndex,
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



module.exports = Root;
