import React from 'react'
import {NativeBaseProvider, Box, Center, Text} from 'native-base'

const Favourites = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} backgroundColor={'black'}>
        <Text color={'white'}>Favourites</Text>
      </Center>
    </NativeBaseProvider>
  )
}

export default Favourites