
import React from "react";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import Exception from "./container/ExeptionContainer";
import Myself from './container/MyselfContainer';
import Settings from './container/SettingsContainer'
import Sidebar from "./container/SidebarContainer";
import AuthLoadingScreen from './AuthLoadingScreen'
import { createSwitchNavigator, createStackNavigator , createBottomTabNavigator } from 'react-navigation';
import {
	Icon
} from 'native-base'
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
const TabsStack = createBottomTabNavigator(
	{
		Children: Home ,
		Exception: Exception,
		Settings: Settings,
		User: Myself,
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Children') {
					iconName = `people`;
				} else if (routeName === 'Exception') {
					iconName = `list-box`;
				} else if (routeName === 'Settings') {
					iconName = `settings`;
				} else if (routeName === 'User') {
					iconName = `person`;
				} 

				// You can return any component that you like here! We usually use an
				// icon component from react-native-vector-icons
				return <Icon name={iconName} size={25} color={tintColor} />;
			},
		}),
	}
)
const AppStack = createStackNavigator(
	{ 
		Tabs: TabsStack 
	},
	{
		initialRouteName: 'Tabs',
		headerMode: 'none',
		mode: 'modal',
	}
);
const AuthStack = createStackNavigator(
	{ 
		Login: Login 
	},
	{
		headerMode: 'none',
    	mode: 'modal',
	}
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);