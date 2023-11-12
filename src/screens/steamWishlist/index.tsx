import { ImageBackground, View, Text } from "react-native";
import { styles } from "./style";
import { NavBar } from "../../components/NavBar";
import { ViewWishlist } from "../../components/ViewWishlist";

export const Wishlist = () => {
   return (
      <>
         <View style={styles.container}>
            <NavBar />
         </View>
         <View style={styles.containerCards}>
            <ViewWishlist />
         </View>
      </>
      );
};
