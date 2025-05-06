import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Custom header component with menu button
const CustomHeader = ({ navigation }) => {
  return (
    <TouchableOpacity 
      style={{ marginLeft: 15 }}
      onPress={() => navigation.toggleDrawer()}
    >
      <Icon name="menu" size={30} color="#000" />
    </TouchableOpacity>
  );
};

// Drawer Navigator
function MainAppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      screenOptions={({ navigation }) => ({
        headerLeft: () => <CustomHeader navigation={navigation} />,
      })}
    >
      <Drawer.Screen 
        name="Feed" 
        component={FeedScreen} 
        options={{ title: 'Community Feed' }} 
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'User Profile' }}
      />
      <Drawer.Screen 
        name="Post" 
        component={PostScreen} 
        options={{ title: 'Create Post' }} 
      />
    </Drawer.Navigator>
  );
}

// Main App Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen 
          name="MainApp" 
          component={MainAppDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}