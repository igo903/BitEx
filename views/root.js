import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  TabBarIOS,
  TouchableOpacity,
  NavigatorIOS,
  Navigator

} from 'react-native';
import TabBarNavigator from 'react-native-tab-navigator'


var css = require('./styles/CSS')
var HomeIndex = require('./home/homeIndex');
var QuotationMain = require('./quotation/quotationMain');
var TradingHallMain = require('./hall/tradingHallMain');
var MyCenter = require('./my/myCenter');



class Root extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

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
      <View style={[css.flex, css.appBackground]}>
        <StatusBar barStyle="light-content"/>
        <Navigator
        	configureScene={ this.configureScene }
        	style={{ flex:1 }}
          initialRoute={{ component: TabBarFooter }}
          renderScene={ this.renderScene } />
      </View>

    );
  }

}

class TabBarFooter extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'home'
      };
    }

  render(){
    return(
    <TabBarIOS tintColor = "#058BFD" barTintColor = "#13161A" >
        <TabBarIOS.Item
            title = "首页"
            selected={this.state.selectedTab === 'home'}
            icon = {require('image!home')}
            selectedIcon={require('image!home_selected')}
            onPress={() => {
              this.setState({
                  selectedTab: 'home',
                });
            }}
        >
        <HomeIndex navigator = {this.props.navigator}></HomeIndex>
        </TabBarIOS.Item>

        <TabBarIOS.Item
            title = "行情"
            selected={this.state.selectedTab === 'quotation'}
            icon = {require('image!trend')}
            selectedIcon={require('image!trend_selected')}
            onPress={() => {
              this.setState({
                  selectedTab: 'quotation',
                });
            }}
        >
        <QuotationMain navigator = {this.props.navigator}></QuotationMain>
        </TabBarIOS.Item>

        <TabBarIOS.Item
            title = "交易大厅"
            selected={this.state.selectedTab === 'hall'}
            icon = {require('image!trade')}
            selectedIcon={require('image!trade_selected')}
            onPress={() => {
              this.setState({
                  selectedTab: 'hall',
                });
            }}
        >
        <TradingHallMain navigator = {this.props.navigator}></TradingHallMain>
        </TabBarIOS.Item>

        <TabBarIOS.Item
            title = "我的"
            selected={this.state.selectedTab === 'mine'}
            icon = {require('image!mine')}
            selectedIcon={require('image!mine_selected')}
            onPress={() => {
              this.setState({
                  selectedTab: 'mine',
                });
            }}
        >
        <MyCenter navigator = {this.props.navigator}></MyCenter>
        </TabBarIOS.Item>

      </TabBarIOS>
    )
  }
}


module.exports = Root;
