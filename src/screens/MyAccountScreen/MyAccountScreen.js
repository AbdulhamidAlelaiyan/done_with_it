import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../../components/UI/Screen";
import ListItem from "../../components/UI/lists/ListItem";

import styles from "./styles";
import colors from "../../config/colors";

const MyAccountScreen = () => (
    <Screen style={styles.container}>
        <ListItem
            title="Mosh Hamedani"
            subTitle="programmingwithmosh@gmail.com"
            image={require("../../../assets/mosh.jpg")}
            style={styles.listItem}
        />
        <View style={styles.accountNavigator}>
            <ListItem
                title="My Listings"
                style={styles.listItem}
                IconComponent={MaterialCommunityIcons}
                iconName="format-list-bulleted"
                iconColor={colors.primary}
                onPress={() => {}}
            />
            <ListItem
                title="My Messages"
                style={styles.listItem}
                IconComponent={MaterialCommunityIcons}
                iconName="email"
                iconColor={colors.secondary}
                onPress={() => {}}
            />
        </View>
        <View style={styles.accountNavigator}>
            <ListItem
                title="Log Out"
                style={styles.listItem}
                IconComponent={MaterialCommunityIcons}
                iconName="logout"
                iconColor={colors.yellow}
                onPress={() => {}}
            />
        </View>
    </Screen>
);

export default MyAccountScreen;
