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
import AppFormImagePicker from "../../components/UI/forms/AppFormImagePicker";

import useLocation from "../../hooks/useLocation.hook";
import validationSchema from "./validationSchema.js";
import listingApi from "../../api/listings";

import styles from "./styles";

import categories from "../../utils/constants/categories.constants";
import UploadScreen from "../UploadScreen";

const ListingEditScreen = () => {
    const [permissionAccepted, setPermissionAccepted] = useState(false);
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);
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

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const response = await listingApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );
        if (!response.ok) {
            setUploadVisible(false);
            return alert("Could not save the product!");
        }
        resetForm();
    };

    useEffect(() => {
        requestImageRollPermission();
    }, []);

    return (
        <Screen style={styles.container}>
            <UploadScreen
                onDone={() => setUploadVisible(false)}
                visible={uploadVisible}
                progress={progress}
            />
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [],
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {permissionAccepted && <AppFormImagePicker name="images" />}
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
