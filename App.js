import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourtPage';
import FifthPage from './pages/FifthPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'HOME', 
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#00bb30', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              paddingLeft: 100
            },
          }}
        />
      </Stack.Navigator>
  );
}
function secondScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="SecondPage">
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'CHAT CENTER ACCESS', 
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#00bb30', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold',
              paddingLeft: 25 
            },
          }}
        />
      </Stack.Navigator>
  );
}


function thirdScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="ThirdPage">
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{
            title: 'UNAUTHORIZED ACTIVITIES', 
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#00bb30', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
  );
}
function fourthScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FourthPage">
        <Stack.Screen
          name="FourthPage"
          component={FourthPage}
          options={{
            title: 'Chat Room', 
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#00bb30', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              paddingLeft: 75
            },
          }}
        />
      </Stack.Navigator>
  );
}
function fifthScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FifthPage">
        <Stack.Screen
          name="FifthPage"
          component={FifthPage}
          options={{
            title: 'COPY RIGHT POLICY', 
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#00bb30', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              paddingLeft: 35
            },
          }}
        />
      </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'Home' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Chat Center Access' }}
          component={secondScreenStack} />
          <Drawer.Screen
          name="ThirdPage"
          options={{ drawerLabel: 'Unauthorized Activities' }}
          component={thirdScreenStack} />
          <Drawer.Screen
          name="FourthPage"
          options={{ drawerLabel: 'Chat Room' }}
          component={fourthScreenStack} />
          <Drawer.Screen
          name="FifthPage"
          options={{ drawerLabel: 'Copy Right Policy' }}
          component={fifthScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;