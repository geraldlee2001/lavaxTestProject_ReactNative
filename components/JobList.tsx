import React, {useState} from 'react'
import { gql, useQuery } from '@apollo/client';
const { SearchBar } =require ('react-native-elements');
const { View, Text, FlatList } = require('react-native');
// import { Searchbar } from 'react-native-paper';
import Job from './Job'
const getJob = gql`
  query getJob($input: JobsInput){
    jobs(input:$input) {
      id
      title
      cities{
        name
        country{
          name
        }
      }
      commitment{
        title
      }
      remotes{
        name
      }
      company{
        name
        logoUrl
      }
      tags{
        name
      }
    }
  }
`;

const JobList = () => {
  const [location, searchLocation] = useState("")
 
  const { loading, error, data } = useQuery(getJob, { variables: { type: "" } })
  if (loading) return null;
  if (error) return <Text>`Error! ${error}`</Text>;
  console.log(error)
  console.log(data)
  return (
    <View>
       <SearchBar
        placeholder="Type Here..."
        onChangeText={(location)=>searchLocation(location)}
        value={location}
      />
      
      <FlatList  
        data={data.jobs}
        renderItem={({ item }) => (
          <Job item={item} location={location}/>
        )}
      />
    </View>
    )
}


export default JobList
