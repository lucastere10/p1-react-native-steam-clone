import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
       backgroundColor: '#202126',
       flex: 0,
       flexDirection: "row",
       alignItems: "center",
       gap: 8,
    },
    containerMenus: {
      backgroundColor: '#202126',
      flex: 0,
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 24,
      gap: 20,
      marginTop: 8,
    },
    textColor: {
       color: '#FCFFFF',
       fontWeight: 'bold',
       fontSize: 18,
       alignSelf:'center',
    },
    textColorBlue: {
      color: '#2F85C4',
      fontWeight: 'bold',
      fontSize: 18,
      alignSelf:'center',
   },
    image: {
      height: 24,
      width: 24,
      rotation: 90,
    },
    avatar: {
      height: 48,
      width: 48,
      justifyContent: 'center'
    },
    input: {
      width: '50%',
      height: 48,
      backgroundColor: '#292C33',
      color: '#FCFFFF',
      padding: 10,
      margin: 12,
      borderWidth: 0,
    }
 });