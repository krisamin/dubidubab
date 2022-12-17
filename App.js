//import { Icon } from "@react-native-material/core";
//import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SvgUri from "react-native-svg-uri";

import React, { useState, PropTypes, Component } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from "./screens/Home";
import Category from "./screens/Category";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import Food from "./screens/Food";
import Buy from "./screens/Buy";

//import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
export default function App() {
  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      'Pretendard-Regular': require("./assets/fonts/Pretendard-Regular.otf"),
      'Pretendard-Medium': require("./assets/fonts/Pretendard-Medium.otf"),
      'Pretendard-SemiBold': require("./assets/fonts/Pretendard-SemiBold.otf"),
      'Pretendard-Bold': require("./assets/fonts/Pretendard-Bold.otf"),
    });
  };

  return isReady ? (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Index" component={Indexs} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Buy" component={Buy} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setIsReady(true)}
      onError={() => {}}
    />
  );
}

const Tab = createBottomTabNavigator();
function Indexs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: '#738b76',
        tabBarActiveTintColor: '#031F00',
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: '#EDF5F0',
          height: 34 + 72,
          borderTopWidth: 0,
          elevation: 0,
          paddingVertical: 8,
          paddingHorizontal: 25,
          position: "absolute",
          bottom: 0
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 15,
          padding: 0
        },
        tabBarIcon: ({focused, color}) => {
          let image;
          if(route.name === '홈')
            image = focused ? require('./assets/icons/home_sel.svg') : require('./assets/icons/home.svg');
          if(route.name === '카테고리')
            image = focused ? require('./assets/icons/category_sel.svg') : require('./assets/icons/category.svg');
          if(route.name === '검색')
            image = focused ? require('./assets/icons/search_sel.svg') : require('./assets/icons/search.svg');
          if(route.name === '프로필')
            image = focused ? require('./assets/icons/profile_sel.svg') : require('./assets/icons/profile.svg');
          
          return <SvgUri width="20" height="20" source={image} fill={color} />
        }
      })}
    >
      <Tab.Screen name="홈" component={Home}/>
      <Tab.Screen name="카테고리" component={Category}/>
      <Tab.Screen name="검색" component={Search}/>
      <Tab.Screen name="프로필" component={Profile}/>
    </Tab.Navigator>
  );
}