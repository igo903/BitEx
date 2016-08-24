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
var QuotationMain = require('./quotation/quotationMain');
var TradingHallMain = require('./hall/tradingHallMain');
var MyCenter = require('./my/myCenter');



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
        initialRoute={{ component: TabBarFooter }}
        renderScene={ this.renderScene } />
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
            icon={{uri:'featured'}}
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
            icon={{uri:'featured'}}
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
            icon={{uri:'featured'}}
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
            icon={{uri:'featured'}}
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
