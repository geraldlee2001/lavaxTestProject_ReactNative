import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import homeScreen from './screen/homeScreen'
import jobScreen from './screen/jobScreen'
import resultScreen from './screen/resultScreen'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache()
});

const stack = createStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='home' component={homeScreen}  options={{ title: '' }}/>
          <stack.Screen name='jobScreen' component={jobScreen} options={{ title: 'Details' }} />
          <stack.Screen name='resultScreen' component={resultScreen}  options={{ title: 'Result' }}/>
        </stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App