import React, { useReducer } from "react";
import { Text, View, Image } from "react-native";

import ListItem from "../../components/UI/lists/ListItem";

import styles from "./styles";

const ProductScreen = ({ navigation, route }) => {
    return (
        <View>
            <View>
                <Image
                    style={styles.productImage}
                    source={route.params.product.imageUri}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{route.params.product.name}</Text>
                    <Text style={styles.price}>
                        {`$${route.params.product.price}`}
                    </Text>
                </View>
            </View>
            <View>
                <Text style={styles.seller}>Seller: </Text>
            </View>
            <ListItem
                title="Mosh Hamedani"
                subTitle="5 Listings"
                image={require("../../../assets/mosh.jpg")}
            />
        </View>
    );
};

export default ProductScreen;
