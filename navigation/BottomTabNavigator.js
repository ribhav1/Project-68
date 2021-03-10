import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FacebookScreen from '../screens/FaceBookScreen';
import InstagramScreen from '../screens/InstagramScreen';

const TabNavigator = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <NavigationContainer>
            <TabNavigator.Navigator>
                <TabNavigator.Screen name="Facebook" component={FacebookScreen} />
                <TabNavigator.Screen name="Instagram" component={InstagramScreen} />
            </TabNavigator.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigator;
