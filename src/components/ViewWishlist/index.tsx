import { ImageBackground, View, Text, Image, TextInput, FlatList, Button, TouchableOpacity  } from "react-native";
import { styles } from "./style";
import { CardWishlist } from "../CardWishlist";

export const ViewWishlist = () => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.avatar} source={require('../../assets/avatar.png')}></Image>
                <Text style={styles.textColor}>LISTA DE DESEJOS DE HETERO POP</Text>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="Buscar por nome ou marcador" style={styles.input}>Teste</TextInput>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.ButtonText} >Opções</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.ButtonText} >Ordenar por: Posições personalizadas</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <CardWishlist /> 
            </View>
        </>



    );
};
