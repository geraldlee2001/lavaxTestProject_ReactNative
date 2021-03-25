import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import homeScreen from './screen/homeScreen'
import jobScreen from './screen/jobScreen'

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='home' component={homeScreen} />
        <stack.Screen name='job' component={jobScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App