import React, { useReducer } from "react";
import { Text, View, Image } from "react-native";

import ListItem from "../../components/UI/ListItem";

import styles from "./styles";

// const initialUserState = {
//     name: "Mosh Hamedani",
//     numOfListings: 5,
// };

// const userReducer = (state, action) => {
//     return state;
// };

const ProductScreen = (props) => {
    // const [userState, userDispatch] = useReducer(userReducer, initialUserState);

    return (
        <View>
            <View>
                <Image
                    style={styles.productImage}
                    source={require("../../../assets/jacket.jpg")}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {props.title ?? "Red Jacket"}
                    </Text>
                    <Text style={styles.price}>
                        {props.subTitle ?? "$900.00"}
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
