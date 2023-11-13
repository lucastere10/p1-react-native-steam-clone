import { ImageBackground, View, Text, Image, TextInput, FlatList, Button, TouchableOpacity  } from "react-native";
import { styles } from "./style";

export const CardWishlist: React.FC<{ nome: string; preco: string; avaliacao: string }> = (props) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{flexDirection:'column', alignItems:'center', gap:1}}>
                    <Image style={styles.imageIcons} source={require('../../assets/arrowCima.png')}></Image>
                    <Image style={styles.image} source={require('../../assets/menu.png')}></Image>
                    <Image style={styles.imageIcons} source={require('../../assets/arrowBaixo.png')}></Image>
                    <Text style={styles.textRemove}>6</Text>
                </View>
                <View style={styles.containerColumn}>
                    <View>
                        <Text style={styles.textColor}>{props.nome}</Text>
                    </View>
                    <View>
                        <Text style={styles.textGrade}>{props.avaliacao}</Text>
                    </View>
                    <View>
                        <Text style={styles.textRemove}>remover</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.containerPrice}>
                        <Text style={styles.textPrice}>{props.preco}</Text>
                        <View style={styles.containerCart}>
                            <Image style={styles.imageCart} source={require('../../assets/cart.png')}></Image>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};