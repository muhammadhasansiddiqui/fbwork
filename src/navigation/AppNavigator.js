import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
// import ProfileScreen from '../screens/ProfileScreen.jsx/index.js';
// import PostScreen from '../screens/PostScreen.jsx/index.js';
// import FeedScreen from '../screens/FeedScreen.jsx';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ title: 'Sign Up' }} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Post" component={PostScreen} options={{ title: 'Create Post' }} />
        <Stack.Screen name="Feed" component={FeedScreen} options={{ title: 'Community Feed' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}