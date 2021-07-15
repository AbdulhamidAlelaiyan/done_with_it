import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import options from "./options.js";
import routes from "./routes.js";

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
                name={routes.FEED}
                component={ProductsNavigator}
                options={options.FeedScreen}
            />
            <TabNavigator.Screen
                name={routes.ADD_PRODUCT}
                component={ListingEditScreen}
                options={options.AddProductScreen}
            />
            <TabNavigator.Screen
                name={routes.ACCOUNT}
                component={AccountNavigator}
                options={options.AccountScreen}
            />
        </TabNavigator.Navigator>
    );
};

export default MainNavigator;
