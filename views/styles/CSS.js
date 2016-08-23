import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

var appBgColor = "#13161A";
var topNavBarBg = "#1b2128";
var sectionBgColor = '#1C1F22';
var fullWidth = Dimensions.get('window').width;

var appCSS = StyleSheet.create({
    flex:{flex:1},
    row:{flexDirection:'row'},
    col:{flexDirection:'column'},

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
