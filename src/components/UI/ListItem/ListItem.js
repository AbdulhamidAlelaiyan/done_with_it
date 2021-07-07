import React from "react";
import { Text, View, Image } from "react-native";

import styles from "./styles";

const ListItem = (props) => {
    return (
        <View style={styles.accountContainer}>
            <Image
                style={styles.userImage}
                source={require("../../../../assets/mosh.jpg")}
            />
            <View style={styles.userDetails}>
                <Text>{props.user.name}</Text>
                <Text style={styles.listingDetails}>
                    {props.user.numOfListings} Listings
                </Text>
            </View>
        </View>
    );
};

export default ListItem;
