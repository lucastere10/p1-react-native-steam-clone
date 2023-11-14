import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        gap: 16
    },
    containerCol: {
        flexDirection: "column",
        alignItems: "flex-start",
        paddingHorizontal: 16,
        gap: 16
    },
    containerList: {
        flexDirection: "row",
        flexWrap:'wrap',
        marginTop: 12,
        alignItems: "flex-start",     
        marginHorizontal: 9,
        gap:2
    },
    textColor: {
        color: '#90939C',
        fontSize: 16,
        alignSelf: 'center'
    },
    avatar: {
        height: 64,
        width: 64,
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: 44,
        backgroundColor: '#343843',
        color: '#FCFFFF',
        padding: 10,
        marginBottom: 8,
        borderRadius: 2
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    },
    ButtonContainer: {
        flex:0,
        flexDirection:'row',
        elevation: 8,
        backgroundColor: "#1997FE",
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 5,
        width:'60%',
        justifyContent:'space-between',
        alignContent:'center'
    },
    ButtonText: {
        fontSize: 16,
        color: "#FCFFFF",
        fontWeight:'bold'
    },
    ButtonTextBlue: {
        fontSize: 12,
        color: "#2F85C4",
        alignSelf: "center",
    }
});