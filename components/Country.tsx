import React from 'react'
import { Text } from 'react-native'

const Country = ({countries}) => {
    return (
        countries.map((country,index)=>(
            <Text key={index} style={{textAlign:'center',fontSize:20}} >{country.name}</Text>
          ))
    )
}

export default Country
