import React from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import colors from "../../../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Icon from "../../Icon";

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
    showChevron,
    iconSize,
}) => {
    const listDetails = subTitle ? (
        <View style={styles.info}>
            <Text style={styles.listingTitle}>{title}</Text>
            <Text style={styles.listingDetails} numberOfLines={5}>
                {subTitle}
            </Text>
        </View>
    ) : (
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    const listImage =
        IconComponent && !showChevron ? (
            <Icon
                name={iconName}
                color={iconColor}
                size={35}
                IconComponent={IconComponent}
            />
        ) : (
            <Image source={image} style={styles.image} />
        );

    const chevron = showChevron && (
        <Icon
            name="chevron-right"
            color={iconColor}
            size={iconSize}
            IconComponent={IconComponent}
            style={styles.rightIcon}
        />
    );

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
                activeOpacity={0.6}
            >
                <View style={[styles.container, style]}>
                    <View style={styles.overview}>
                        {listImage}
                        {listDetails}
                    </View>
                    {chevron}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

export default ListItem;
