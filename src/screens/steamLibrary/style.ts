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
    containerCards:{
      paddingTop: StatusBar.currentHeight*0.6,
      flex: 0,
      flexDirection: "column",
      backgroundColor: '#2B2B35',
      alignItems: "baseline",
      height: '100%',
      gap: 8,  
  }
 });