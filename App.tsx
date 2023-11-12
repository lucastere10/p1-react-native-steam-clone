import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Wishlist } from './src/screens/steamWishlist';

export default function App() {
  return (
    <>
      <StatusBar
        style={"auto"}
      />
      <Wishlist />
    </>
  )
};