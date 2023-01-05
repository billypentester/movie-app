import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { StatusBar } from 'react-native';


import Home from './../screens/Home';
import Favourites from './../screens/Favourites';
import Profile from './../screens/Profile';
import Genre from "../screens/Genre";
import Header from './../screens/Header';

const Tab = createBottomTabNavigator();

function BottomNavigation({navigation}) {

  return (

    <>
        <StatusBar barStyle={'light-content'} color={'#000'} />
        <Tab.Navigator initialRouteName="Home" screenOptions={{ 
            tabBarActiveTintColor: '#db0000', 
            tabBarHideOnKeyboard: true,
            tabBarStyle: { backgroundColor:"#000000", paddingTop:10, height:70},
            tabBarLabelStyle: { paddingVertical: 10},
            tabBarIcon:{ color:"#eeee" }, 
            header: ({ navigation, route, options }) => {
                const title = getHeaderTitle(options, route.name);
                return <Header title={title} />;
        }}}> 

            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="house" color={color} size={size} />)
            }}/>

            <Tab.Screen name="Favourite" component={Favourites} options={{ tabBarLabel: 'Favourite', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="favorite" color={color} size={size} />)
            }}/>

            <Tab.Screen name="Genre" component={Genre} options={{ tabBarLabel: 'Genre', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="movie" color={color} size={size} />)
            }}/>


            <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="settings" color={color} size={size} />)
            }}/>

        </Tab.Navigator>
    </>

  )
}

export default BottomNavigation