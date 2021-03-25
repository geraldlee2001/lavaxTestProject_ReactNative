import { Link } from '@react-navigation/native';
import React from 'react'
const { StyleSheet } =require("react-native") ;
const { View, Text,TouchableOpacity,FlatList,renderItem} =require('react-native') ;
import { ListItem } from 'react-native-elements'
import jobScreen from '../screen/jobScreen';

const Job = ({ item, location }) => {
    if (location !== "") {
        item=item.matches(item.location===location)
    }
    return (
        <TouchableOpacity styles={style.listItem} >
            <View>
                <ListItem bottomDivider >
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

