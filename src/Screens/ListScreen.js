import React, { Component } from 'react';
import { Text, View,ImageBackground,Dimensions,FlatList,Image,StatusBar } from 'react-native';
import { HeaderBar } from '../Components/HeaderBar';
import { WHITE, BLUE } from '../../AppConstants/colorConstants';
import { STOCK_BACKGROUND } from '../../AppConstants/iconConstants';
import { DATA } from '../../AppConstants/ImageData';

const {width,height}=Dimensions.get('screen');


export const ListScreen = (props)=> {

  const styles ={
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    bodyContainer:{
      flex:7,
      justifyContent:'center'
    },
    listItemContainer:{
      justifyContent:'center',
      marginTop:10,
      paddingHorizontal:'10%'
    },
    thumbnailStyle:{
      width:'100%',
      height:150
    },
    itemLabel:{
      fontSize:14,
      color:WHITE
    },
    listStyle:{
      height:height,
      width:'100%'
    }
  }

    return (
      <View style={styles.container}>
         <StatusBar backgroundColor={BLUE} barStyle="light-content" />
        <HeaderBar title="Bloomberg" backBtn={true} handleBackPress={()=>props.navigation.goBack()} />
        <View style={styles.bodyContainer}>

        <ImageBackground source={STOCK_BACKGROUND} style={{width: '100%', height: '100%'}}>
        <FlatList
        data={DATA}
        renderItem={({ item }) => 
          <View key={item.id} style={styles.listItemContainer}>
                <Image style={styles.thumbnailStyle} source={{uri:item.url}} resizeMode="contain"/>
                <Text style={styles.itemLabel}>{item.label}</Text>
          </View>
        }
        keyExtractor={item => item.id}
      />
        </ImageBackground>
        </View>
      </View>
    );
}


