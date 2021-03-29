import React from 'react'
const { StyleSheet } =require("react-native") ;
const { View, Text, TouchableOpacity } = require('react-native');
const _ = require('lodash');
import {  Avatar,Card } from 'react-native-elements'
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
  let tag = []
  //handle number of tags show
  const tags=item.tags
  tag = _.slice(tags, 0, 3)

  return (
    <TouchableOpacity  onPress={handlePassProps}>
      <View>
        <Card>
          <Avatar
            source={{ uri: `https://logo.clearbit.com/${ logoURL }` }}
            size="medium"
            containerStyle={{flex: 1, marginTop: 15,marginBottom:15,alignSelf:'center'}}
          />
          <Text style={style.listItemText} >{item.company.name}</Text>
          <Text style={style.listItemText}>
            <Country countries={countries}/>
          </Text>
          <Text style={style.listItemText}>
            <Country countries={item.remotes} />
          </Text>
          <Text style={style.listItemText}><Tags tags={tag}/></Text>
        </Card>
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

