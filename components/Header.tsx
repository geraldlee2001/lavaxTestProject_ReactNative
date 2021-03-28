import React from 'react'
const { View, Text, StyleSheet} = require('react-native');

const Header = () => {
    return (
        <View style={style.header}>
            <Text style={style.text}>
                GraphQL jobs
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: "#0a42a3"
    },
    
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign:'center',
    }
})

export default Header;