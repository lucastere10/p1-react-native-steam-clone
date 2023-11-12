import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
       backgroundColor: '#202126',
       flex: 0,
       flexDirection: "column",
       alignItems: "center",
       paddingTop: StatusBar.currentHeight,
       paddingBottom: 16
    },
    textColor: {
       color: '#FCFFFF',
       fontWeight: 'bold',
       fontSize: 30,
       alignSelf:'center'
    },
    containerCards:{
      paddingTop: StatusBar.currentHeight*0.6,
      flex: 0,
      flexDirection: "column",
      backgroundColor: '#1B2838',
      alignItems: "baseline",
      height: '100%',
      gap: 8,  
  }
 });