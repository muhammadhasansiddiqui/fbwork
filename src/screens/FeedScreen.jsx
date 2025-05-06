import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeedScreen = () => {
  // eslint-disable-next-line no-unused-vars
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed Screen</Text>
      <Text>Welcome to the community feed!</Text>
      <Text>Here you can see all the posts from the community.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50, // Add padding to account for header
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default FeedScreen;