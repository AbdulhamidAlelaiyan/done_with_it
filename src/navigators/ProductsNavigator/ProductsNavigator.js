import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import options from "./options.js";
import routes from "./routes.js";

// Screens:
import ProductsListScreen from "../../screens/ProductsListScreen/ProductsListScreen.js";
import ProductScreen from "../../screens/ProductScreen/ProductScreen.js";

const Products = createStackNavigator();
const ProductsNavigator = () => {
    return (
        <Products.Navigator mode="modal">
            <Products.Screen
                name={routes.PRODUCTS_LIST}
                component={ProductsListScreen}
                options={options.ProductsList}
            />
            <Products.Screen
                name={routes.PRODUCT_DETAILS}
                component={ProductScreen}
                options={options.ProductDetails}
            />
        </Products.Navigator>
    );
};

export default ProductsNavigator;
