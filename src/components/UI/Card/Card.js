import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const Card = (props) => (
    <TouchableOpacity
        style={[styles.card, props.style]}
        onPress={props.onPress}
    >
        <Image source={{ uri: props.imageUrl }} style={styles.cardImage} />
        <View style={styles.textContainer}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={[styles.text, styles.price]} numberOfLines={5}>
                {props.subTitle}
            </Text>
        </View>
    </TouchableOpacity>
);

export default Card;
