import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import options from "./options.js";

// Screens:
import ListingEditScreen from "../../screens/ListingEditScreen/ListingEditScreen.js";

// Navigators:
import ProductsNavigator from "../ProductsNavigator/ProductsNavigator.js";
import AccountNavigator from "../AccountNavigator/AccountNavigator.js";

const TabNavigator = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <TabNavigator.Navigator tabBarOptions={options.navigator}>
            <TabNavigator.Screen
                name="Feed"
                component={ProductsNavigator}
                options={options.FeedScreen}
            />
            <TabNavigator.Screen
                name="AddProduct"
                component={ListingEditScreen}
                options={options.AddProductScreen}
            />
            <TabNavigator.Screen
                name="Account"
                component={AccountNavigator}
                options={options.AccountScreen}
            />
        </TabNavigator.Navigator>
    );
};

export default MainNavigator;
