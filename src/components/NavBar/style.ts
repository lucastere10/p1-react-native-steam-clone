import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
       backgroundColor: '#202126',
       flex: 0,
       flexDirection: "row",
       alignItems: "center",
       gap: 2,
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
    },
    avatar: {
      height: 48,
      width: 48,
      justifyContent: 'center'
    },
    input: {
      width: '55%',
      height: 44,
      backgroundColor: '#292C33',
      color: '#FCFFFF',
      padding: 10,
      paddingLeft: 38,
      margin: 12,
      borderWidth: 0,
    }
 });