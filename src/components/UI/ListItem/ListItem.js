import React from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import colors from "../../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Icon from "../Icon";

import styles from "./styles";

const ListItem = ({
    onPress,
    image,
    title,
    subTitle,
    renderRightActions,
    style,
    IconComponent,
    iconName,
    iconColor,
}) => {
    const listDetails = subTitle ? (
        <View style={styles.info}>
            <Text style={styles.listingTitle}>{title}</Text>
            <Text style={styles.listingDetails}>{subTitle}</Text>
        </View>
    ) : (
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    const listImage = IconComponent ? (
        <Icon
            name={iconName}
            color={iconColor}
            size={35}
            IconComponent={IconComponent}
        />
    ) : (
        <Image source={image} style={styles.image} />
    );

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
                activeOpacity={0.6}
            >
                <View style={[styles.container, style]}>
                    {listImage}
                    {listDetails}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

export default ListItem;
