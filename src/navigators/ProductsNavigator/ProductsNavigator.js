import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import options from "./options.js";

// Screens:
import ProductsListScreen from "../../screens/ProductsListScreen/ProductsListScreen.js";
import ProductScreen from "../../screens/ProductScreen/ProductScreen.js";

const Products = createStackNavigator();
const ProductsNavigator = () => {
    return (
        <Products.Navigator>
            <Products.Screen
                name="ProductsList"
                component={ProductsListScreen}
                options={options.ProductsList}
            />
            <Products.Screen
                name="ProductDetails"
                component={ProductScreen}
                options={options.ProductDetails}
            />
        </Products.Navigator>
    );
};

export default ProductsNavigator;
