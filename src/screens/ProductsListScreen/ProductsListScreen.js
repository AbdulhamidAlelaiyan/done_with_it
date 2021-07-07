import React, { useReducer } from "react";
import { SafeAreaView } from "react-native";

import Card from "../../components/UI/Card";

import Product from "../../models/Product";

import styles from "./styles";

const productsInitalState = [
    new Product("Red Jacket", 100.0, require("../../../assets/jacket.jpg")),
    new Product("Couch", 900.0, require("../../../assets/couch.jpg")),
];

const productsReducer = (state, action) => state;

const ProductsListScreen = (props) => {
    const [productsState, productsDispatch] = useReducer(
        productsReducer,
        productsInitalState
    );

    const productCards = productsInitalState.map((product) => {
        return (
            <Card
                title={product.name}
                subTitle={`$${product.price}`}
                image={product.imageUri}
            />
        );
    });

    return <SafeAreaView style={styles.screen}>{productCards}</SafeAreaView>;
};

export default ProductsListScreen;
