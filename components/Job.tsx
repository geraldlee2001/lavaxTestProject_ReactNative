import React from 'react'
const { StyleSheet } =require("react-native") ;
const { View, Text, TouchableOpacity, Image } = require('react-native');
const _ = require('lodash');
import { ListItem, Avatar } from 'react-native-elements'
import Country from './Country'
import Tags from './Tags'

const Job = ({ item, countries, navigation }) => {
  const handlePassProps = () => {
    navigation.navigate('jobScreen', {
      item
    })
  }
  const logoURL = item.company.websiteUrl.replace("http://", "")
  var i = 0
  let tag=[]
  const tags=item.tags
  tag=_.slice(tags, 0, 3)

  return (
    
    <TouchableOpacity  onPress={handlePassProps}>
      <View>
        <Avatar
          source={{ uri: `https://logo.clearbit.com/${ logoURL }` }}
          size="medium"
          containerStyle={{flex: 1, marginTop: 15,marginBottom:15,alignSelf:'center'}}
        />
        <ListItem bottomDivider >
          <ListItem.Content>
            <ListItem.Title style={style.listItemText} >{item.title}</ListItem.Title>
            <ListItem.Subtitle style={style.listItemText}>{item.company.name}</ListItem.Subtitle>
            <ListItem.Subtitle>
              <Country countries={countries} />
            </ListItem.Subtitle>
            <Tags items={tag}/>
          </ListItem.Content>
        </ListItem>
      </View>
    </TouchableOpacity>
  )

}
const style = StyleSheet.create({

    listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  listItemText: {
      textAlign:'center',
      fontSize: 20,
    },
});
  
export default Job

