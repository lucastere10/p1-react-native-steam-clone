import { SafeAreaView, ImageBackground, View, Text, Image, TextInput, FlatList, Button, TouchableOpacity, FlatListComponent } from "react-native";
import { styles } from "./style";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

const gap = 10
const jogos = [
    {
        nome: 'Hollow Knight',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/library_600x900.jpg',
    },
    {
        nome: 'Age of Empires II',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/221380/library_600x900.jpg',
    },
    {
        nome: 'Resident Evil 2',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/883710/library_600x900.jpg',
    },
    {
        nome: 'Age of Empires III CC',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/105450/library_600x900.jpg',
    },
    {
        nome: 'Age of Mythology',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/266840/library_600x900.jpg',
    },
    {
        nome: 'Albion',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/761890/library_600x900.jpg',
    },
    {
        nome: 'Among Us',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/library_600x900.jpg',
    },
    {
        nome: 'Awesomenauts',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/204300/library_600x900.jpg',
    },
    {
        nome: 'Banished',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/242920/library_600x900.jpg',
    },
    {
        nome: 'Rust',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/library_600x900.jpg',
    },
    {
        nome: 'Rome II Total War',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/214950/library_600x900.jpg',
    },
    {
        nome: 'Eternal Return',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1049590/library_600x900.jpg',
    },
    {
        nome: 'Darkest Dungeon',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/262060/library_600x900.jpg',
    },
    {
        nome: 'Stardew Valley',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/library_600x900.jpg',
    },
    {
        nome: 'Project Zomboid',
        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/108600/library_600x900.jpg',
    },
]

const CardWishlist = ({ uri }) => (
    <Image
        style={{ width: '30%', height: 176 }}
        source={{ uri: uri }}
    />
);

export const ViewLibrary = () => {
    return (
        <>
            <View style={styles.container}>
                <Entypo name="magnifying-glass"
                    size={32}
                    color="#5F5F67"
                    style={{ position: 'absolute', marginLeft: 340, zIndex: 1, paddingBottom: 10 }}
                />
                <TextInput placeholder="Buscar por nome ou marcador" style={styles.input} placeholderTextColor={'#748191'}>Teste</TextInput>
            </View>
            <View style={styles.container}>
                <Text style={styles.textColor}>ORDENAR POR: </Text>
                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.ButtonText}>  Nome</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={22} color="#FCFFFF" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerList}>
                <FlatList
                    contentContainerStyle={{ gap }}
                    columnWrapperStyle={{ gap }}
                    numColumns={3}
                    data={jogos}
                    renderItem={({ item }) => <CardWishlist uri={item.uri} />}
                    keyExtractor={item => item.nome}
                    ListFooterComponent={<View style={{height: 260}}/>}
                />
            </View>
        </>
    );
};
