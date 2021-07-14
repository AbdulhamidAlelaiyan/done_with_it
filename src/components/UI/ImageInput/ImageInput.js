import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

const ImageInput = ({ imageUri, onChangeImage, style }) => {
    let content;
    if (imageUri) {
        content = <Image source={{ uri: imageUri }} style={styles.container} />;
    } else {
        content = (
            <MaterialCommunityIcons name="camera" size={35} color="black" />
        );
    }

    return (
        <TouchableOpacity
            onPress={onChangeImage}
            activeOpacity={0.5}
            style={[styles.container, style]}
        >
            {content}
        </TouchableOpacity>
    );
};

export default ImageInput;
