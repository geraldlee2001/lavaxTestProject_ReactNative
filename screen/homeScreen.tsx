import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header'
import JobList from '../components/JobList'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import jobScreen from './jobScreen'


const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache()
});

const homeScreen = ({navigation}) => {
  return (
    <SafeAreaProvider>
    <ApolloProvider client={client}>
      <View>
        <Header />
          <JobList navigation={navigation}/>
      </View>
      </ApolloProvider>
    </SafeAreaProvider>
    
  )
}

export default homeScreen
