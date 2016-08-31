import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  ListView,
  PixelRatio,
  TouchableOpacity,
  TabBarIOS,
  Navigator

} from 'react-native';
import Swiper from 'react-native-swiper';


var NavTop = require('./../navTop');
var css = require('./../styles/CSS');
var MyHomeBuy = require('./homeBuy');

var pages = {};
pages["HomeBuy"] = require('./homeBuy');
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');


class HomeIndex extends React.Component{
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource:ds.cloneWithRows([
      {img:require("./../../img/a1.png")},
      {img:require("./../../img/a2.png")},
      {img:require("./../../img/a3.png")},
      {img:require("./../../img/a2.png")},
      {img:require("./../../img/a4.png")},
      {img:require("./../../img/a3.png")},
      {img:require("./../../img/a2.png")},
      {img:require("./../../img/a1.png")},
      ])
    }
  }


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

  listItem(rowData){
    return (
      <View style={[css.adImageView]}>
          <Image resizeMode="cover" style={css.adImage} source = {rowData.img}></Image>
      </View>
    )
  }

  render() {
    return (
      <View style={css.flex}>
        <NavTop title = {"首页"}></NavTop>
        <ScrollView style={{marginTop:-20}} automaticallyAdjustContentInsets = {true}>
          <Swiper height={180}
            activeDot = {<View style={css.swpActDot} />}
            dot = {<View style={css.swpDot} />}
            paginationStyle={css.swpPag}
            autoplay={true}
            showsButtons={false}>
					<View>
						<Image style={css.fullImg}
							source={require('./../../img/banner2@2x.png')}
						/>
					</View>
					<View>
						<Image style={css.fullImg}
							source={require('./../../img/b12x.png')}
						/>
					</View>
					<View>
						<Image style={css.fullImg}
							source={require('./../../img/b1.png')}
						/>
					</View>
				</Swiper>

        <View style={[css.row,css.iconPortArea,css.view]}>
					<View style={css.center}>
						<TouchableOpacity onPress={this.linkTo.bind(this,"HomeBuy","积分买入") }>
							<Image source = {require("image!home_message")} style={css.iconPort}></Image>
						</TouchableOpacity>
						<Text style={css.portTxt}>消息中心</Text>
					</View>

					<View style={css.center}>
						<TouchableOpacity >
							<Image source = {require("image!home_buying")} style={css.iconPort}></Image>
						</TouchableOpacity>
						<Text style={css.portTxt} >积分买入</Text>
					</View>

					<View style={css.center}>
						<TouchableOpacity >
  							<Image source = {require("image!home_sale")} style={css.iconPort}></Image>
						</TouchableOpacity>
						<Text style={css.portTxt} >积分卖出</Text>
					</View>

					<View style={css.center}>
						<TouchableOpacity >
							<Image source = {require("image!home_search")} style={css.iconPort}></Image>
						</TouchableOpacity>
						<Text style={css.portTxt} >交易查询</Text>
					</View>
				</View>


        <View style={css.view}>
          <View>
            <Text style={{marginTop:12,marginLeft:10,marginBottom:12,color:'#76787A'}}>积分优惠活动</Text>
          </View>
          <View style={{paddingLeft:8,paddingRight:8}}>
            <ListView
              dataSource = {this.state.dataSource}
              automaticallyAdjustContentInsets = {false}
              renderRow = {this.listItem}
              contentContainerStyle={css.homeList}
            />
          </View>

				</View>

        </ScrollView>
      </View>


    )
  }
}

module.exports = HomeIndex;
