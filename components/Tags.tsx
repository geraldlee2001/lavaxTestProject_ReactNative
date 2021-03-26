import React from 'react'
import {View,Text} from 'react-native'
// import { ListItem } from 'react-native-elements'

const Tags = ({ items }) => {
    
    return(
        items.map((item,index)=>(
            <Text key={index}>{item.name}</Text>
        ))
    )
}

export default Tags
