import { ImageBackground, View, Text } from "react-native";
import { styles } from "./style";
import { NavBar } from "../../components/NavBar";
import { ViewLibrary } from "../../components/viewLibrary";

export const Library = () => {
   return (
      <>
         <View style={styles.container}>
            <NavBar />
         </View>
         <View style={styles.containerCards}>
            <ViewLibrary />
         </View>
      </>
      );
};
