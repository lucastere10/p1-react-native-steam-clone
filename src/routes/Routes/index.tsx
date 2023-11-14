import { Image } from "react-native";
import { Wishlist } from "../../screens/steamWishlist";
import { Library } from "../../screens/steamLibrary";
import { Auth } from "../../screens/steamAuth";
import { Notification } from "../../screens/steamNotification";
import { Menu } from "../../screens/steamMenu";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, MaterialIcons, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Wishlist: undefined;
    Library: undefined;
    Auth: undefined;
    Notification: undefined;
    Menu: undefined;
};

export const TabRoutes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    // tabBarBackground: () => {
                    //     return (
                    //         <MaterialIcons name="keyboard-arrow-down" size={22} color="#FCFFFF" />
                    //     );
                    // },
                    tabBarInactiveBackgroundColor: "##5C5FB250",
                    tabBarStyle: {
                        backgroundColor: "#202126",
                        // paddingTop: 4.5, paddingBottom: 8 
                    },
                    tabBarActiveTintColor: "#DD8EEA",
                    tabBarInactiveTintColor: "#DD8EEA80",
                }}>
                <Tab.Screen
                    name="Wishlist"
                    component={Wishlist}
                    options={{
                        tabBarIcon: () => (
                            <AntDesign name="tag" size={22} color="#FCFFFF" />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Library"
                    component={Library}
                    options={{
                        tabBarIcon: () => (
                            <AntDesign name="idcard" size={22} color="#FCFFFF" />
                        ),
                    }}

                />
                <Tab.Screen
                    name="Auth"
                    component={Auth}
                    options={{
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="shield" size={22} color="#FCFFFF" />
                        ),
                    }}

                />
                <Tab.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        tabBarIcon: () => (
                            <FontAwesome5 name="bell" size={22} color="#FCFFFF" />
                        ),
                    }}

                />
                <Tab.Screen
                    name="Menu"
                    component={Menu}
                    options={{
                        tabBarIcon: () => (
                            <Entypo name="menu" size={22} color="#FCFFFF" />
                        ),
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};