import { Image, View } from "react-native";
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
                    tabBarStyle: {
                        backgroundColor: "#202126",
                        height: 75,
                    },
                }}>
                <Tab.Screen
                    name="Wishlist"
                    component={Wishlist}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50, 
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#1A9FFE"
                            }}>
                                <AntDesign name="tag" size={22} color={focused ? "#1A9FFE" : "#E1E2E6"} />
                            </View>
                        )
                    }}
                />
                <Tab.Screen
                    name="Library"
                    component={Library}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50, 
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#1A9FFE"
                            }}>
                                <AntDesign name="idcard" size={22} color={focused ? "#1A9FFE" : "#E1E2E6"} />
                            </View>
                        ),
                    }}

                />
                <Tab.Screen
                    name="Auth"
                    component={Auth}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50, 
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#1A9FFE"
                            }}>
                                <MaterialCommunityIcons name="shield" size={22} color={focused ? "#1A9FFE" : "#E1E2E6"} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50, 
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#1A9FFE"
                            }}>
                                <FontAwesome5 name="bell" size={22} color={focused ? "#1A9FFE" : "#E1E2E6"} />
                            </View>),
                    }}

                />
                <Tab.Screen
                    name="Menu"
                    component={Menu}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50, 
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#1A9FFE"
                            }}>
                                <Entypo name="menu" size={36} color={focused ? "#1A9FFE" : "#E1E2E6"} />
                            </View>

                        ),
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};