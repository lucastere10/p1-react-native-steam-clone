import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
       backgroundColor: '#3D4D5D',
       flex: 0,
       flexDirection: "row",
       alignItems: "center",
       justifyContent: 'space-between',
       width:'100%',
       gap: 16,
       paddingHorizontal: 16,
       paddingVertical: 8
    },
    containerColumn: {
      flex: 0,
      flexDirection: "column",
      alignItems:'flex-start',
      gap: 6,
      padding: 4
    },
    containerPrice: {
      flex: 0,
      backgroundColor: '#303E4B',
      flexDirection: "row",
      alignItems:'center',
      padding: 3,
      paddingLeft: 14,
      gap: 8
    },
    containerCart: {
        flex: 0,
        backgroundColor: '#73AD22',
        flexDirection: "row",
        alignItems:'flex-start',
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 4
    },
    textColor: {
       color: '#FCFFFF',
       fontWeight: 'bold',
       fontSize: 18,
       alignSelf:'center',
    },
    textGrade: {
        color: '#91B2D1',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf:'center',
     },
    textRemove: {
        color: '#748191',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf:'center',
        textDecorationLine:'underline'
     },
     textPrice: {
        color: '#FCFFFF',
        fontSize: 10,
        alignSelf:'center',
     },
    image: {
      height: 24,
      width: 24,
      rotation: 90,
    },
    imageCart: {
        height: 20,
        width: 20,
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