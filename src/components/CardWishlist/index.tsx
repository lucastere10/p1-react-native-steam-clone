import { ImageBackground, View, Text, Image, TextInput, FlatList, Button, TouchableOpacity  } from "react-native";
import { styles } from "./style";

export const CardWishlist = () => {
    return (
        <>
            <View style={styles.container}>
                <View  >
                    <Image style={styles.image} source={require('../../assets/arrowCima.png')}></Image>
                    <Image style={styles.image} source={require('../../assets/menu.png')}></Image>
                    <Image style={styles.image} source={require('../../assets/arrowBaixo.png')}></Image>
                    <Text style={styles.textRemove}>6</Text>
                </View>
                <View style={styles.containerColumn}>
                    <View>
                        <Text style={styles.textColor}>Stellaris</Text>
                    </View>
                    <View>
                        <Text style={styles.textGrade}>MUITO POSITIVAS</Text>
                    </View>
                    <View>
                        <Text style={styles.textRemove}>remover</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.containerPrice}>
                        <Text style={styles.textPrice}>R$139,99</Text>
                        <View style={styles.containerCart}>
                            <Image style={styles.imageCart} source={require('../../assets/cart.png')}></Image>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};