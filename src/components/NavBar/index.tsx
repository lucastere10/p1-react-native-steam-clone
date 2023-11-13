import { ImageBackground, View, Text, Image, TextInput } from "react-native";
import { styles } from "./style";

export const NavBar = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../assets/683176_arrows_512x512.png')}
                />
                <TextInput placeholder="Steam" style={styles.input} />
                {/* <Text style={styles.textColor}>Testando Navbar</Text> */}
                <Image
                    style={styles.image}
                    source={require('../../assets/png-transparent-three-dots-multimedia-solid-px-icon-thumbnail.png')}
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
