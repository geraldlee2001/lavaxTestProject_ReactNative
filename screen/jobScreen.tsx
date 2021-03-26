import React, { useCallback }from 'react'
const { View, Text, Button, Linking, Alert, ScrollView, StyleSheet } = require('react-native')
import Tags from '../components/Tags' 

const jobScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const url= item.applyUrl
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);
    return (
        <ScrollView>
            <View>
                <Text style={style.title}>{item.title}</Text>
                <Text style={style.company}>{item.company.name}</Text>
                <Text style={style.description}>{item.description}</Text>
                <Tags items={item.tags}/>
                <Button title="Apply Now" onPress={handlePress}> </Button>
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    title: {
        fontSize:30,
        padding: 5,
        textAlign: 'center',
        backgroundColor:'purple',
    },
    company: {
        fontSize: 20,
        textAlign:'center',
    },
    description: {
        fontSize:15,
    }
})

export default jobScreen
