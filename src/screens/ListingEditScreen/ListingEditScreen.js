import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../../components/UI/forms";
import Screen from "../../components/UI/Screen";
import CategoryPickerItem from "../../components/Shop/CategoryPickerItem";
import useLocation from "../../hooks/useLocation";
import validationSchema from "./validationSchema.js";

import styles from "./styles";

import categories from "../../utils/constants/categories.constants";
import AppFormImagePicker from "../../components/UI/forms/AppFormImagePicker";

const ListingEditScreen = () => {
    const [permissionAccepted, setPermissionAccepted] = useState(false);
    const location = useLocation();

    const requestImageRollPermission = async () => {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("You can't pick an image wihtout giving the permission.");
        } else {
            setPermissionAccepted(true);
        }
    };

    useEffect(() => {
        requestImageRollPermission();
    }, []);

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    imageUris: [],
                }}
                onSubmit={() => console.log(location)}
                validationSchema={validationSchema}
            >
                {permissionAccepted && <AppFormImagePicker name="imageUris" />}
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    maxLength={8}
                    keyboardType="numeric"
                    name="price"
                    placeholder="Price"
                    style={{ width: "28%" }}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                    style={{ width: "50%" }}
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
};

export default ListingEditScreen;
