import {NativeBaseProvider, Center, Text} from 'native-base'

const Profile = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Text color={'black'}>Profile</Text>
      </Center>
    </NativeBaseProvider>
  )
}

export default Profile