
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
const Drawer = DrawerNavigator(
    {
        Home: { screen: Home },
    },
    {
        initialRouteName: "Home",
        contentComponent: props => <Sidebar {...props} />,
    }
);
export const RootNavigator = (signedIn: boolean) => {
    return StackNavigator(
		{
			Login: { screen: Login },
			BlankPage: { screen: BlankPage },
			Drawer: { screen: Drawer },
		},
		{
			initialRouteName: (signedIn) ? "Drawer" : "Login" ,
			headerMode: "none",
		}
	);
}