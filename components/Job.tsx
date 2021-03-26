import { Link } from '@react-navigation/native';
import React from 'react'
const { StyleSheet } =require("react-native") ;
const { View, Text,TouchableOpacity,Image} =require('react-native') ;
import { ListItem, Avatar } from 'react-native-elements'

const Job = ({ item, navigation }) => {
  const handlePassProps = () =>{
    navigation.navigate('jobScreen', {
      item
    })
  }
  const logoURL =item.company.websiteUrl.replace("http://", "")

    return (
        <TouchableOpacity styles={style.listItem} onPress={handlePassProps}>
        <View>
          <ListItem bottomDivider >
            <Avatar source={{uri: `https://logo.clearbit.com/${logoURL}`}} />
                  <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                    <ListItem.Subtitle>{item.company.name}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
            </View>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    listItem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
    listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    listItemText: {
      fontSize: 18,
    },
});
  
export default Job

