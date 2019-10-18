import React, {Component} from 'react';
import {Platform, Text, View,Image,TouchableWithoutFeedback} from 'react-native';
import { TWITTER_ICON, FACEBOOK_ICON, BACK_BTN } from '../../AppConstants/iconConstants';
import { WHITE, BLUE } from '../../AppConstants/colorConstants';

export const HeaderBar=(props)=>{
    styles={
        container:{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal:'5%',
            backgroundColor:BLUE
        },
        headerTitle:{
            fontSize:23,
            fontWeight:'600',
            color: WHITE
        },
        iconStyle:{
            height:20,
            width:20,
            tintColor:WHITE
        },
        backBtnStyle:{
            height:25,
            width:25,
            tintColor:WHITE,
            marginRight:'5%'
        }
    }
    return(
        <View style={styles.container}>
            {
                props.backBtn &&
                <TouchableWithoutFeedback onPress={props.handleBackPress}>
                <Image style={styles.backBtnStyle} source={BACK_BTN}/>
                </TouchableWithoutFeedback>
            }

            <View style={{flex:1}}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
            <View>
                <Image style={styles.iconStyle} source={TWITTER_ICON}/>
                <Image style={[styles.iconStyle,{marginTop:10}]} source={FACEBOOK_ICON}/>
            </View>
        </View>
    )
}
