import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1B2838',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        gap: 16
    },
    textColor: {
        color: '#FCFFFF',
        fontWeight: 'bold',
        fontSize: 28,
        alignSelf: 'center'
    },
    avatar: {
        height: 64,
        width: 64,
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: 36,
        backgroundColor: '#182432',
        color: '#FCFFFF',
        padding: 10,
        marginTop: 16,
        marginBottom: 8,
        borderWidth: 1,
        borderRadius: 6
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    },
    ButtonContainer: {
        elevation: 8,
        backgroundColor: "#3D444E",
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 10
    },
    ButtonText: {
        fontSize: 12,
        color: "#FCFFFF",
        alignSelf: "center",
    }
});