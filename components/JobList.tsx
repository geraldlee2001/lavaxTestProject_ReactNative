import React, {useState, useEffect} from 'react'
const { SearchBar, Icon } =require ('react-native-elements');
const { View, Text, FlatList, StyleSheet, TouchableOpacity } = require('react-native');
const _ = require('lodash');
import Job from './Job'
import {useJobsListHook,useLocationHook,useCityHook} from './hooks'


const JobList = ({ navigation }) => {
  let city, searchBar
  const [location, setLocation] = useState("")
  const [citySlug, setCitySlug] = useState("")
  const { jobLoading, jobError, jobData, jobRefetch } = useJobsListHook()
  const { locationLoading, locationError, locationData, locationRefetch } = useLocationHook(location)
  const { cityLoading, cityError, cityData, cityRefetch } = useCityHook(citySlug)
  const handleChangeText = (e) => {
    setLocation(e)
    locationRefetch(e)
  }
    const handleLocationSlug = (e) => {
      setCitySlug(e)
  }
  useEffect(() => {
    if (!cityData) {
      return 
    }
    handleResult()
  }, [
    cityData
  ])

  const handleResult = () => {
    searchBar.clear()
    navigation.navigate('resultScreen',  cityData )
    }
  
    if (jobLoading) return null;
    if (jobError) return <Text>`Error! Job ${jobError}`</Text>;
    if (locationLoading) return null;
    if (locationError) return <Text>`Error! Location ${locationError}`</Text>;

    let listViewRef
    const handleBackTop = () => {
      listViewRef.scrollToOffset({ offset: 0, animated: true })
  }
  
  const data = jobData
  
    return (
      <View>
        <SearchBar
          clearIcon={{ type: 'material-community', color: '#86939e', name: 'arrow-left' }}
          placeholder="Type Here..."
          onChangeText={handleChangeText}
          value={location}
          ref={(ref) => {
            searchBar = ref;
          }}
        />
        {!!location && (<FlatList
          data={locationData.locations}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text onPress={() => handleLocationSlug(_.get(item, "slug", null))} style={{ padding: 10 }} ref>{_.get(item, "name", null)}</Text>
            </TouchableOpacity>
          )}
        />)}
        <FlatList
          data={data.jobs}
          renderItem={({ item }) => (
            <Job item={item} countries={item.cities} navigation={navigation} />
          )}
          ref={(ref) => {
            listViewRef = ref;
          }}
        />
        <TouchableOpacity style={[styles.button, { right: 10, top: 600 }]} onPress={handleBackTop}>
          <Icon
            reverse
            name='arrow-up-outline'
            type='ionicon'
            color='#ff80ff'
          />
        </TouchableOpacity>
        
      </View>
    )
}


const styles = StyleSheet.create({
  button:{
    position: 'absolute',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },
}
)

export default JobList
