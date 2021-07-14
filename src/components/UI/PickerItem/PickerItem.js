import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import Icon from "../Icon";

import styles from "./styles";

const PickerItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.item}>
            <AppText>{item.label}</AppText>
        </View>
    </TouchableOpacity>
);

export default PickerItem;
