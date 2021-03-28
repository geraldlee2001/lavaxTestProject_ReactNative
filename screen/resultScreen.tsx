import React from 'react'
import { View, FlatList } from 'react-native'
import Job from '../components/Job'

const resultScreen = ({ route, navigation }) => {
    const { city } = route.params;

    return (
        <View>
            <FlatList  
                data={city.jobs}
                renderItem={({ item }) => (
                    <Job item={item} countries={item.cities} navigation={navigation} />
                )}
            />
        </View>
    )
}

export default resultScreen
