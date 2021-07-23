import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import Card from "../../components/UI/Card";
import AppActivityIndicator from "../../components/UI/AppActivityIndicator";
import AppButton from "../../components/UI/AppButton";

import Product from "../../models/Product";
import routes from "../../navigators/ProductsNavigator/routes";
import listingsApi from "../../api/listings";
import styles from "./styles";
import useApi from "../../hooks/useApi.hook";

const ProductsListScreen = ({ navigation }) => {
    const {
        loading,
        error,
        data: products,
        request: loadProducts,
    } = useApi(listingsApi.getListings);

    useEffect(() => {
        loadProducts();
    }, []);

    const goToProduct = (product) => {
        navigation.navigate(routes.PRODUCT_DETAILS, { product });
    };
    let productCards;

    if (products) {
        productCards = products.map((product) => {
            return (
                <Card
                    title={product.title}
                    subTitle={`$${product.price}`}
                    imageUrl={product.images[0].url}
                    onPress={goToProduct.bind(null, product)}
                    key={product.images[0].url}
                />
            );
        });
    }

    let view;

    if (error) {
        view = (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error Occured!</Text>
                <AppButton
                    color="danger"
                    title="Retry"
                    onPress={loadProducts}
                />
            </View>
        );
    } else if (loading) {
        view = <AppActivityIndicator visible style={styles.loader} />;
    } else {
        view = <ScrollView>{productCards}</ScrollView>;
    }

    return <SafeAreaView style={styles.screen}>{view}</SafeAreaView>;
};

export default ProductsListScreen;
