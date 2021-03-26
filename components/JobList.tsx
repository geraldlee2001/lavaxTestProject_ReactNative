import React, {useState} from 'react'
import { useQuery } from '@apollo/client';
const { SearchBar } =require ('react-native-elements');
const { View, Text, FlatList } = require('react-native');
import Job from './Job'
import {getJob,getLocation,getCity} from '../gql/query'


const JobList = ({navigation}) => {
  const [location, setLocation] = useState("")
  const { loading, error, data } = useQuery(getJob, { variables: { type: "" } })
  const handleChangeText = (e) => {
    setLocation(e)
    useQuery(getLocation,{ variables: { value: e} })
  }
  if (loading) return null;
  if (error) return <Text>`Error! ${error}`</Text>;
  return (
    <View>
       <SearchBar
        placeholder="Type Here..."
        onChangeText={handleChangeText}
        value={location}
      />    
      <FlatList  
        data={data.jobs}
        renderItem={({ item }) => (
          <Job item={item} navigation={navigation}/>
        )}
      />
    </View>
    )
}


export default JobList
