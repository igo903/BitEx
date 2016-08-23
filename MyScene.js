import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyScene extends Component {
  static propTypes = {
    title: React.PropTypes.string,
  };
  static defaultProps = {
    title: 'MyScene',
  };

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}

module.exports = MyScene;
