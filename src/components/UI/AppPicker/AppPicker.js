import React, { useState } from "react";
import {
    View,
    TouchableWithoutFeedback,
    Modal,
    Button,
    SafeAreaView,
    FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../../config/styles";

import AppText from "../AppText";

import styles from "./styles";
import PickerItem from "../PickerItem";

const AppPicker = ({
    icon,
    items,
    placeholder,
    onSelectItem,
    selectedItem,
    PickerItemComponent = PickerItem,
    numberOfColumns = 1,
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
                        <>
                            <MaterialCommunityIcons
                                name={selectedItem.icon}
                                size={20}
                                style={styles.icon}
                            />
                            <AppText style={styles.text}>
                                {selectedItem.label}
                            </AppText>
                        </>
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
                        numColumns={numberOfColumns}
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => {
                            return (
                                <PickerItemComponent
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
