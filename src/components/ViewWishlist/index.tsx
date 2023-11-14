import { ImageBackground, View, Text, Image, TextInput, FlatList, Button, TouchableOpacity } from "react-native";
import { styles } from "./style";
import CardWishlist from "../CardWishlist";

const gap = 8
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
    {
        nome: 'Cities: Skylines II',
        preco: 'R$199,99',
        avaliacao: 'NEUTRAS'
    },
    {
        nome: 'Company of Heroes 3',
        preco: 'R$299,90',
        avaliacao: 'NEUTRAS'
    },
    {
        nome: 'Slay the Spire',
        preco: 'R$74,99',
        avaliacao: 'EXTREMAMENTE POSITIVAS'
    },
    {
        nome: 'Hollow Knight: Silksong',
        preco: 'Em Breve',
        avaliacao: 'NENHUMA ANÁLISE DE USUÁRIO'
    },    
    {
        nome: 'Hades',
        preco: 'R$73,99',
        avaliacao: 'MUITO POSITIVAS'
    },

]

export const ViewWishlist = () => {
    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
                <Image style={styles.avatar} source={require('../../assets/avatar.png')}></Image>
                <Text style={[styles.textColor, { width: '75%' }]}>LISTA DE DESEJOS DE HETERO POP</Text>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="Buscar por nome ou marcador" style={styles.input} placeholderTextColor={'#748191'}>Teste</TextInput>
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
            <View style={{
                paddingHorizontal: 32,
                borderWidth: .2,
                borderColor: '#3D444E',
                width: '93%',
                alignSelf: 'center',
                marginVertical: 3
            }}>
            </View>
            <View style={[styles.containerCol, {flex: 1, width: '100%'}]}>
                <FlatList
                    contentContainerStyle={{ gap }}
                    data={jogos}
                    renderItem={({ item }) => <CardWishlist item={item} />}
                    keyExtractor={item => item.nome}
                    ListFooterComponent={<View style={{height: 150}}/>}
                />
            </View>
        </View>
    );
};
