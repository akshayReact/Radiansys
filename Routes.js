
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {HomeScreen} from "./src/Screens/HomeScreen";
import { ListScreen } from "./src/Screens/ListScreen";
import Splash from "./src/Screens/Splash";



const AppNavigator = createStackNavigator({
 welcome:Splash,
 home:HomeScreen,
 listScreen:ListScreen
},{
    defaultNavigationOptions: {
      header: null
    },
});

const AppRoutes=createAppContainer(AppNavigator)

export default AppRoutes;