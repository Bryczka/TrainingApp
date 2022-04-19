import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { NativeBaseProvider } from 'native-base';
import { BottomNavigation } from './react-native/navigation/bottom-navigation';

export const App = () => (
    <NativeBaseProvider>
        <NavigationContainer>
            <BottomNavigation />
        </NavigationContainer>
    </NativeBaseProvider>
);
