import React, { useState } from "react";
import {
    View,
    TouchableWithoutFeedback,
    Modal,
    Button,
    SafeAreaView,
    FlatList,
    Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../../config/styles";

import AppText from "../AppText";
import PickerItem from "../PickerItem";

import styles from "./styles";

const AppPicker = ({
    icon,
    items,
    placeholder,
    onSelectItem,
    selectedItem,
    ...rest
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <View style={[styles.container, rest.style]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.dark}
                            style={styles.icon}
                        />
                    )}
                    {selectedItem ? (
                        <AppText style={styles.text}>
                            {selectedItem.label}
                        </AppText>
                    ) : (
                        <AppText style={styles.placeholder}>
                            {placeholder}
                        </AppText>
                    )}
                    {/* <AppText style={styles.text}>
                        {selectedItem?.label ?? placeholder}
                    </AppText> */}
                    <MaterialCommunityIcons
                        name={"chevron-down"}
                        size={20}
                        color={defaultStyles.colors.dark}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <SafeAreaView>
                    <Button
                        title="Close"
                        onPress={() => setModalVisible(false)}
                    />
                    <FlatList
                        numColumns={3}
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => {
                            return (
                                <PickerItem
                                    item={item}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onSelectItem(item);
                                    }}
                                />
                            );
                        }}
                    />
                </SafeAreaView>
            </Modal>
        </>
    );
};

export default AppPicker;
