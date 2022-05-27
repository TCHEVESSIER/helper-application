import React from 'react-native'
import { View, Dimensions, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useRef } from 'react';

// Import Screen

import HomeScreen from './Views/Home/Home';
import TestScreen from './Views/Test/Test'

// Import Tab Icons

import HomeIcon from './assets/Medias/Icons/Home_Icon.svg'
import SearchIcon from './assets/Medias/Icons/Discovery_Icon.svg'
import SocialMediaIcon from './assets/Medias/Icons/Social_Icon.svg'
import BookingIcon from './assets/Medias/Icons/Booking_Icon.svg'

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get('window').width;

export default function App() {
  let [fontsLoaded] = useFonts({
    'Nunito-Light' : require('./assets/Fonts/Nunito/static/Nunito-Light.ttf'),
    'Nunito-Regular' : require('./assets/Fonts/Nunito/static/Nunito-Regular.ttf'),
    'Nunito-Bold' : require('./assets/Fonts/Nunito/static/Nunito-Bold.ttf'),
  })

  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  if(!fontsLoaded) {
    return <AppLoading></AppLoading>
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' screenOptions={props => ({ 
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: '#24A4A5',
            position: 'absolute',
            marginHorizontal: 20,
            paddingHorizontal: 20,
            bottom: 40,
            borderRadius: 50,
            height: 70,
            shadowColor: 'none'
          }, 
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: "#fff",
          tabBarLabelStyle: {
            fontSize: 12,
            position: 'absolute',
            top: 45,
            textAlignVertical: 'center',
            fontFamily: 'Nunito-Regular'
          },
          tabBarIconStyle: {
            width: 30,
            height: 30,
            position: 'absolute',
            top: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if(props.route.name === "Accueil"){
  
              iconName = focused
              ? <HomeIcon width={30} height={30} stroke={"#000"}></HomeIcon>
              : <HomeIcon width={30} height={30}></HomeIcon>;
            }
            if(props.route.name === "Search"){
  
              iconName = focused
              ? <SearchIcon width={30} height={30}></SearchIcon>
              : <SearchIcon width={30} height={30}></SearchIcon>;
            }
  
            if(props.route.name === "Social"){
  
              iconName = focused
              ? <SocialMediaIcon width={30} height={30}></SocialMediaIcon>
              : <SocialMediaIcon width={30} height={30}></SocialMediaIcon>;
            }
  
            if(props.route.name === "Booking"){
  
              iconName = focused
              ? <BookingIcon width={30} height={30}></BookingIcon>
              : <BookingIcon width={30} height={30}></BookingIcon>;
            }
  
            return iconName ;
          },}) }>
          <Tab.Screen name={'Accueil'} component={HomeScreen} listeners={({navigation, route}) => ({
            tabPress : e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true 
              }).start();
            }
          })}></Tab.Screen>
          <Tab.Screen name={'Search'} component={TestScreen} listeners={({navigation, route}) => ({
            tabPress : e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.5,
                useNativeDriver: true 
              }).start();
            }
          })}></Tab.Screen>
          <Tab.Screen name={'Social'} component={HomeScreen} listeners={({navigation, route}) => ({
            tabPress : e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.05,
                useNativeDriver: true 
              }).start();
            }
          })}></Tab.Screen>
          <Tab.Screen name={'Booking'} component={HomeScreen} listeners={({navigation, route}) => ({
            tabPress : e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4.6,
                useNativeDriver: true 
              }).start();
            }
          })}></Tab.Screen>
        </Tab.Navigator>
        <Animated.View style={{
          width: getWidth(), 
          height: 5, 
          backgroundColor: "#fff", 
          position: 'absolute',
          bottom: 109 - 4,
          left: 55,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          transform: [{
            translateX: tabOffsetValue
          }]
        }}></Animated.View>
      </NavigationContainer>
    );
  }
  
}

function getWidth() {
  let width = screenWidth

  console.log(width);

  width = width - 190

  return width / 4
}