/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View,ImageBackground,ScrollView,Dimensions,StatusBar } from 'react-native';
import { HeaderBar } from '../Components/HeaderBar';
import { WHITE, BLUE } from '../../AppConstants/colorConstants';
import { ButtonComponent } from '../Components/ButtonComponent';
import { STOCK_BACKGROUND } from '../../AppConstants/iconConstants';

const {width,height}=Dimensions.get('screen');

export const HomeScreen = (props) =>  {

  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    bodyContainer:{
      flex:7,
      justifyContent:'center'
    },
    mainContainer: {
      flex: 12,
      justifyContent: 'flex-start',
      alignItems:'center'
    },
    linkContainer: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal:'5%'
    },
    titleText: {
      marginTop:'40%',
      fontSize: 30,
      fontWeight:'600',
      color: WHITE,
    },
    subtitleText: {
      color: WHITE,
      fontSize: 16,
      marginTop:'2%'
    },
    linkText: {
      color: WHITE,
      fontSize: 16,
    }
  }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={BLUE} barStyle="light-content" />
        <HeaderBar title="Bloomberg" />
        <View style={styles.bodyContainer}>

        <ImageBackground source={STOCK_BACKGROUND} style={{width: '100%', height: '100%'}}>
        <ScrollView contentContainerStyle={{height:height-150,width:'100%'}}>

        <View style={styles.mainContainer}>
          <Text style={styles.titleText}>The Trading Game</Text>
          <Text style={styles.subtitleText}>So you think you can trade ?</Text>
          <ButtonComponent title="Play" handlePress={()=>props.navigation.navigate('listScreen')} />
        </View>
        <View style={styles.linkContainer}>
          <Text style={[styles.subtitleText, { textDecorationLine: 'underline' }]}>Toph Tucker</Text>
          <Text style={[styles.subtitleText, { textDecorationLine: 'underline' }]}>About</Text>
          <Text style={styles.subtitleText}>October 19, 2015</Text>
        </View>
        </ScrollView>

        </ImageBackground>
        </View>
      </View>
    );
  
}


