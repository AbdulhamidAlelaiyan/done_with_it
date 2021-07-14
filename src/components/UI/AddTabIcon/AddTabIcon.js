import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "../Icon/Icon.js";

import styles from "./styles.js";
import colors from "../../../config/colors.js";
import { useNavigation } from "@react-navigation/native";

const AddTabIcon = (props) => {
    const navigation = useNavigation();

    const goToAddProduct = () => {
        navigation.navigate("AddProduct");
    };

    return (
        <TouchableOpacity
            style={styles.parentContainer}
            onPress={goToAddProduct}
            {...props}
        >
            <View style={styles.container}>
                <Icon
                    IconComponent={MaterialCommunityIcons}
                    iconColor={colors.black}
                    size={27}
                    name="plus"
                    style={styles.iconContainer}
                />
            </View>
        </TouchableOpacity>
    );
};

export default AddTabIcon;
