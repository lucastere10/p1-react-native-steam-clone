import { ImageBackground, View, Text, Image, TextInput, FlatList, Button, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { AntDesign, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Navigation } from 'react-native-navigation';

export const CardWishlist: React.FC<{ nome: string; preco: string; avaliacao: string }> = (props) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <MaterialIcons name="keyboard-arrow-up" size={24} color="#748191" />
                    <AntDesign name="bars" size={28} color="#748191" />
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="#748191" />
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
                        <TouchableOpacity>
                            <View style={styles.containerCart}>
                                <MaterialCommunityIcons name="cart-variant" size={20} color="#FCFFFF" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};