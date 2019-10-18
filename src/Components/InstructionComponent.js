import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import { WHITE, BLUE, RED, BLACK, SILVER } from '../../AppConstants/colorConstants';

export const InstructionComponent=(props)=>{
    styles={
        container:{
            justifyContent:'center',
            paddingHorizontal:'5%',
            backgroundColor:SILVER
        },
        title:{
            fontSize:14,
            color:BLACK
        },
        content:{
            fontSize:12,
            color:BLACK
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Instructions</Text>
            <Text numberOfLines={9} style={styles.content}>Tap anywhere to buy a share. hold your finger to hold or release to sell</Text>
        </View>
    )
}
