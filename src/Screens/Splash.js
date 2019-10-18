import React, { Component } from 'react';
import {View,Image,ActivityIndicator,StyleSheet,StatusBar} from 'react-native';
import { SPLASH_BANNER } from '../../AppConstants/iconConstants';
import { WHITE, THEME_BLUE } from '../../AppConstants/colorConstants';
import{StackActions, NavigationActions} from 'react-navigation';

const resetAction=StackActions.reset({
    index:0,
    actions:[NavigationActions.navigate({routeName:'home'})]
})

export default class Splash extends Component {

    componentDidMount(){
        this.autoNavigatetoHome();
    }

    autoNavigatetoHome=()=>{
        setTimeout(()=>this.props.navigation.dispatch(resetAction),1000)
    }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={THEME_BLUE} barStyle="light-content" />
        <Image style={styles.bannerStyle} source={SPLASH_BANNER} resizeMode="contain"/>
        <ActivityIndicator size="large" color={WHITE}/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:THEME_BLUE
},
bannerStyle:{
    width:'100%',
    height:'50%',
}
});

