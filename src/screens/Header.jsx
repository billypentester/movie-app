import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header({title}) {
  return (
    <View>
        <Text style={{  padding: 15, backgroundColor: '#000000', flexDirection: 'row', fontSize: 20, color:'white' }}>{title}</Text>
    </View>
  )
}

export default Header