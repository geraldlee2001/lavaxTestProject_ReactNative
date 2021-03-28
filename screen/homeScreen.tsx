import React from 'react'
import { View } from 'react-native'
import Header from '../components/Header'
import JobList from '../components/JobList'
import { SafeAreaProvider } from 'react-native-safe-area-context';


const homeScreen = ({navigation }) => {
  return (
    <SafeAreaProvider>
      <View>
        <Header />
          <JobList navigation={navigation} />
      </View>
    </SafeAreaProvider>
    
  )
}

export default homeScreen
