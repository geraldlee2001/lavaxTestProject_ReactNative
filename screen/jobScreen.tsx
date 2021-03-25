import React from 'react'
import { View, Text } from 'react-native'

const jobScreen = ({item}) => {
    return (
        <View>
            <Text >{item.title}</Text>
        </View>
    )
}

export default jobScreen
