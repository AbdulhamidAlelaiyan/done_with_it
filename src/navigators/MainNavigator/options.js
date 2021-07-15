import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AddTabIcon from "../../components/UI/AddTabIcon";

export default {
    navigator: {
        activeTintColor: "tomato",
        inactiveTintColor: "black",
    },
    FeedScreen: {
        tabBarIcon: ({ size, color }) => {
            return (
                <MaterialCommunityIcons name="home" size={size} color={color} />
            );
        },
    },
    AddProductScreen: {
        tabBarButton: () => {
            return <AddTabIcon />;
        },
        title: "Add Product",
    },
    AccountScreen: {
        tabBarIcon: ({ size, color }) => {
            return (
                <MaterialCommunityIcons name="face" size={size} color={color} />
            );
        },
        title: "My Account",
    },
};
