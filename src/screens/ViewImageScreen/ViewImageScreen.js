import React from "react";
import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

const ViewImageScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="close"
                        size={35}
                        color={colors.white}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="trash-can-outline"
                        size={35}
                        color={colors.white}
                    />
                </TouchableOpacity>
            </View>
            <Image
                style={styles.image}
                source={require("../../../assets/chair.jpg")}
                resizeMode="contain"
            />
        </View>
    );
};

export default ViewImageScreen;
