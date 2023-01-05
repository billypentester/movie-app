import {NativeBaseProvider, Text, Center} from 'native-base'

const Home = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} backgroundColor={'black'}>
        <Text color={'white'}>Home</Text>
      </Center>
    </NativeBaseProvider>
  )
}

export default Home