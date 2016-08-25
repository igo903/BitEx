import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator

} from 'react-native';

var css = require('./styles/CSS');
var theme = require('./styles/theme');

class NavTop extends React.Component{

  constructor(props){
    super(props);
    this.props.title = this.props.title || "";
    this.props.leftBlock = this.props.leftBlock || null;
    this.props.rightBlock = this.props.rightBlock || null;
    this.props.backgroundColor = this.props.backgroundColor || null;
    this.props.translucent = this.props.translucent || false;
    this.props.useBackBtn = this.props.useBackBtn || false;

    this._navStyle = {}
    if(this.props.backgroundColor)
      this._navStyle.backgroundColor = this.props.backgroundColor;
    if(this.props.translucent)
      this._navStyle.backgroundColor = "transparent";
  }

  _goBack(){
    this.props.navigator.pop();
  }

  _leftBlock(){
      if(this.props.useBackBtn){
          return(
              <TouchableOpacity  onPress={ this._goBack.bind(this)} >
                  <View style={css.navBack}>
                      <Text style={[css.iconFont,{fontSize:18,color:theme.text}]}>{theme.icon.back}</Text>
                  </View>
              </TouchableOpacity>
          )
      }
      else if(this.props.leftBlock != null){
          return this.props.leftBlock();
      }
      else{
          <Text style={css.navBlockFont}>&nbsp;</Text>
      }
  }


  _rightBlock(){
    if(this.props.rightBlock == null){
        return(
            <Text style={css.navBlockFont}>&nbsp;</Text>
        )
    }
    else{
        return this.props.rightBlock();
    }
  }


  render(){
    return(
      <View style={[css.view,css.navigator,css._navStyle ]}>
          <View style={[css.navLeftBlock,css.flex]}>
              {this._leftBlock()}
          </View>
          <View style={[css.navMainBlock,{flex:2}]}>
              <Text style={css.navMainFont}>{this.props.title}</Text>
          </View>
          <View style={[css.navRightBlock,css.flex]}>
              {this._rightBlock()}
          </View>
      </View>
    )
  }
}


module.exports = NavTop;
