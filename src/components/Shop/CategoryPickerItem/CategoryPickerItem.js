import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../UI/AppText";
import Icon from "../../UI/Icon";

import styles from "./styles";

const CategoryPickerItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.item}>
            <Icon
                name={item.icon}
                color={item.backgroundColor}
                size={25}
                IconComponent={MaterialCommunityIcons}
                style={{ width: 50, height: 50 }}
            />
            <AppText style={styles.text}>{item.label}</AppText>
        </View>
    </TouchableOpacity>
);

export default CategoryPickerItem;
