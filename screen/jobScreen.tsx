import React, { useCallback }from 'react'
const { View, Text, Button, Linking, Alert, ScrollView, StyleSheet  } = require('react-native')
import { Avatar } from 'react-native-elements'
import Tags from '../components/Tags' 
import Country from '../components/Country'
import Moment from 'react-moment';

const jobScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const url = item.applyUrl

    //handle redirect to apply link
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    const logoURL = item.company.websiteUrl.replace("http://", "")
    const description = item.description.replace(/#|\*/g, "")

    return (
        <ScrollView>
            <View>
                <Text style={[style.subtitle, { backgroundColor: '#87CEEB' }]}>
                    <Avatar
                        source={{ uri: `https://logo.clearbit.com/${ logoURL }` }}
                        size="small"
                        containerStyle={{flex: 1, marginRight: 50,marginBottom:15}}
                    />
                    {item.company.name} is hearing a
                </Text>
                <Text style={[style.title, { backgroundColor: '#87CEEB' } ]}>{item.title}</Text>
                <Text style={style.description}>{description}</Text>
                <Text style={style.subtitle}>Tags</Text>
                <Text style={style.subtitle}><Tags tags={item.tags} /></Text>
                <Text style={style.subtitle}>Country</Text>
                <Text style={style.content}><Country countries={item.cities}/></Text>
                <Text style={style.subtitle}>Commitment</Text>
                <Text style={style.content}>{item.commitment.title}</Text>
                <Text style={style.subtitle}>Created at</Text>
                <Text style={style.content}>
                    <Moment element={Text} fromNow>{new Date(item.createdAt)}</Moment>
                </Text>
                <Button
                    title="Apply Now"
                    onPress={handlePress}
                    color='#f194ff'>
                </Button>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    title: {
        color: 'black',
        fontSize:30,
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    content: {
        fontSize: 20,
        textAlign:'center',
    },

    description: {
        fontSize:18,
    },

    subtitle: {
        marginTop:5,
        textAlign:'center',
        fontSize:25,
    }
})

export default jobScreen
