import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Center, Button, Box } from 'native-base'
import { StatusBar } from 'react-native';


const Login = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={'light-content'} color={'#000'} />
      <Center flex={1} backgroundColor={'black'}>
        <Button colorScheme="red" size={'lg'} onPress={()=>{
          navigation.navigate('BottomNavigation', { screen: 'Home' })
        }}>Login</Button>
      </Center>
    </NativeBaseProvider>
  )
}

export default Login