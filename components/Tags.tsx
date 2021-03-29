import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Tags = ({ tags }) => {
    return (
        tags.map((tag, index) => (
            <View key={index} style={{ padding: 10, flex: 1 }}>            
                <Text key={index} style={styles.tags}>{tag.name}</Text>
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
    }
})

export default Tags
