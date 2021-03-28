import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Tags = ({ items }) => {
    return (
        items.map((item, index) => (
            <View style={{ padding: 10, flex: 1 }}>            
                <Text key={index} style={styles.tags}>{item.name}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    tags:{
        borderWidth: 1,
        borderStyle: 'dashed',
        width: 100,
        height: 20,
        textAlign: 'center',
        padding:0,
    }
})

export default Tags
