import React from 'react'
import {NativeBaseProvider, Box, Center, Text} from 'native-base'

const Genre = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} backgroundColor={'black'}>
      <Text color={'white'}>Genre</Text>
    </Center>
    </NativeBaseProvider>
  )
}

export default Genre