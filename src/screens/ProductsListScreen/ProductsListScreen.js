import React, { useReducer } from "react";
import { SafeAreaView } from "react-native";

import Card from "../../components/UI/Card";

import Product from "../../models/Product";
import routes from "../../navigators/ProductsNavigator/routes";

import styles from "./styles";

const productsInitalState = [
    new Product("Red Jacket", 100.0, require("../../../assets/jacket.jpg")),
    new Product("Couch", 900.0, require("../../../assets/couch.jpg")),
];

const productsReducer = (state, action) => state;

const ProductsListScreen = ({ navigation }) => {
    const [productsState, productsDispatch] = useReducer(
        productsReducer,
        productsInitalState
    );

    const goToProduct = (product) => {
        navigation.navigate(routes.PRODUCT_DETAILS, { product });
    };

    const productCards = productsInitalState.map((product) => {
        return (
            <Card
                title={product.name}
                subTitle={`$${product.price}`}
                image={product.imageUri}
                onPress={goToProduct.bind(null, product)}
            />
        );
    });

    return <SafeAreaView style={styles.screen}>{productCards}</SafeAreaView>;
};

export default ProductsListScreen;
