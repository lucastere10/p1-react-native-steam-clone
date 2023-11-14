import { ImageBackground, View, Text, Image, TextInput } from "react-native";
import { styles } from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';


export const NavBar = () => {
    return (
        <>
            <View style={styles.container}>
                <MaterialIcons name="arrow-back-ios" size={24} color="#FCFFFF" />
                {/* <Image
                    style={styles.image}
                    source={require('../../assets/683176_arrows_512x512.png')}8E9196
                /> */}
                <FontAwesome5 name="steam"
                    size={24}
                    color="#5F5F67"
                    style={{ position: 'absolute', marginLeft: 48, zIndex: 1 }}
                />
                <TextInput placeholder="Steam ©" style={styles.input} placeholderTextColor="#5F5F67" />
                {/* <Image
                    style={styles.image}
                    source={require('../../assets/png-transparent-three-dots-multimedia-solid-px-icon-thumbnail.png')}
                /> */}
                <Entypo name="dots-three-vertical" size={24} color="#8E9196" style={{ marginRight: 12 }} />
                <Entypo name="magnifying-glass"
                    size={24}
                    color="#5F5F67"
                    style={{ position: 'absolute', marginLeft: 220, zIndex: 1 }}
                />
                <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar.png')}
                ></Image>
            </View>
            <View style={styles.containerMenus}>
                <Text style={styles.textColor}>Menu</Text>
                <Text style={styles.textColor}>Lista de Desejos</Text>
                <Text style={styles.textColor}>Carteira <Text style={styles.textColorBlue}>(R$ 0,00)</Text></Text>
            </View>
        </>
    );
};
