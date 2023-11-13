import { ImageBackground, View, Text, Image, TextInput, FlatList, Button, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { CardWishlist } from "../CardWishlist";

const jogos = [
    {
        nome: 'Stellaris',
        preco: 'R$107,99',
        avaliacao: 'MUITO POSITIVAS'
    },
    {
        nome: 'Hearts of Iron IV',
        preco: 'R$107,99',
        avaliacao: 'MUITO POSITIVAS'
    },
    {
        nome: 'Dead Cells',
        preco: 'R$47,49',
        avaliacao: 'EXTREMAMENTE POSITIVAS'
    },
    {
        nome: 'Eastward',
        preco: 'R$73,99',
        avaliacao: 'MUITO POSITIVAS'
    },

]

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
                    <Text style={styles.ButtonText}>Opções</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.ButtonTextBlue}>
                        Ordenar por:
                        <Text style={styles.ButtonText}>  Posições personalizadas</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerCol}>
                {jogos.map((jogo) => (
                    <CardWishlist
                        key={jogo.nome}
                        nome={jogo.nome}
                        preco={jogo.preco}
                        avaliacao={jogo.avaliacao}
                    />
                ))}
            </View>
        </>
    );
};
