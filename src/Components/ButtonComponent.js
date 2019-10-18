import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import { WHITE, BLUE, RED, LIGHT_RED, DARK_RED } from '../../AppConstants/colorConstants';
import LinearGradient from 'react-native-linear-gradient';

export const ButtonComponent=(props)=>{
    styles={
        container:{
            flexDirection:'row',
            marginTop:'5%',
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal:'5%',
            paddingVertical:10,
            backgroundColor:RED,
            elevation:2
        },
        headerTitle:{
            fontSize:28,
            color: WHITE
        },
    }
    return(
        <LinearGradient colors={[LIGHT_RED,DARK_RED]} style={styles.container}>
            <Text style={styles.headerTitle} onPress={props.handlePress}>{props.title}</Text>
        </LinearGradient>
    )
}
