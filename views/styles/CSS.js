import { StyleSheet, Platform } from 'react-native';
import Dimensions from 'Dimensions';

var theme = require('./theme')

var appBgColor = "#13161A";
var topNavBarBg = "#1b2128";
var sectionBgColor = '#1C1F22';
var fullWidth = Dimensions.get('window').width;

var appCSS = StyleSheet.create({

    /**********     Common Usage   ***********/
    flex:{flex:1},

    row:{flexDirection:'row'},
    col:{flexDirection:'column'},
    center:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        justifyContent:"center",
        alignItems:"center"
    },
    border:{
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    view:{
        backgroundColor:theme.panel
    },
    appBackground:{
        backgroundColor:theme.backgroundColor,
        flex:1
    },
    appFontFamily:{
      fontFamily:"PingFang SC"
    },

    /**********      promo banner     ***********/
    fullImg:{
        width: fullWidth,
        height:180
    },

    /**********      navigator     ***********/
    navLeftBlock:{
        justifyContent:"flex-end",
        alignItems:"flex-start",

    },
    navRightBlock:{
        justifyContent:"flex-end",
        alignItems:"flex-end",

    },
    navMainBlock:{
        justifyContent:"flex-end",
        alignItems:"center",
        paddingBottom:10
    },
    navBlockFont:{
        fontSize:16,
        color:"#fff"
    },
    navMainFont:{
        fontSize:18,
        color:"#fff",
        fontWeight:"bold",

    },
    navBack:{
        width:60,
        height:50,
        justifyContent:"flex-end",
        alignItems:"flex-start",
        paddingLeft:10,
        paddingBottom:10
    },
    navBtnBack:{
        fontFamily:"iconfont",
        fontSize:20,
        color:theme.text
    },
    navigator:{
        height:Platform.OS=="ios"?64:50,
        paddingTop:14,
        flexDirection:"row",
        backgroundColor:theme.navigator
    },




    iconPortArea:{
        height:102,
        marginBottom:10
    },
    iconPort:{
        width:40,
        height:40
    },
    portTxt:{color:'white',marginTop:11,fontSize:13},
    promosContainer:{
        marginLeft:10,
        marginRight:5
    },
    promoCell:{
        flex:1,
        height:128,
        marginBottom:5
    },
    promoCellImg:{
        marginRight:5,
        height:128,
        width:fullWidth / 2  - 13
    },



    homeList: {
        marginTop:5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    adImageView:{
        width:fullWidth/2-13+5,
        height:128+5,
        padding:2.5
    },
    adImage:{
        width:fullWidth/2-13,
        height:128
    },






    /*************Swiper********************/
    swpActDot:{backgroundColor: '#FFFFFF', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5,},
    swpDot:{backgroundColor: '#FFFFFF',opacity:0.5, width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5,},
    swpPag:{
        bottom: 3,
    },












  /*******************************************/
      /******************iconfont*******************/
      iconFont:{
          fontFamily:"iconfont"
      },
      iconGoDetail:{
          color:theme.text,
          fontSize:12
      },
      /*********************************************/
      /*****************input***********************/
      inputText:{
          fontSize:15,
          lineHeight:20,
          height:20,
          color:theme.text,
          padding:0

      },
      /********************************************/




    wrap:{
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'red'

    },

    container: {
      flex: 1,
     	marginTop: 80
    },
    heading: {
    	fontSize:22,
      marginBottom:10
    },
    button: {
    	height:60,
      justifyContent: 'center',
      backgroundColor: '#efefef',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button2: {
    	height:60,
      marginTop: 15,
      justifyContent: 'center',
      backgroundColor: '#efefef',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
    	fontSize:20
    }



});


module.exports = appCSS;
