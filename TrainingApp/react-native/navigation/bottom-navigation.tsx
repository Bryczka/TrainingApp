// eslint-disable-next-line no-use-before-define
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile-screen/profile-screen';
import { HistoryScreen } from '../screens/history-screen/history-screen';
import { HomeScreen } from '../screens/home-screen/home-screen';

export type BottomNavigationParamList = {
    HomeScreen: undefined;
    HistoryScreen: undefined;
    ProfileScreen: undefined;
};

const Tab = createMaterialTopTabNavigator<BottomNavigationParamList>();

export const BottomNavigation = () => (
    <Tab.Navigator initialRouteName="HomeScreen" tabBarPosition="bottom">
        <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
);
