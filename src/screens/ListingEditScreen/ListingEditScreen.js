import React from "react";
import { Text } from "react-native";

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../../components/UI/forms";
import Screen from "../../components/UI/Screen";
import validationSchema from "./validationSchema.js";

import styles from "./styles";

const ListingEditScreen = () => {
    const categories = [
        {
            label: "Furniture",
            value: 1,
            icon: "floor-lamp",
            backgroundColor: "#fc5c65",
        },
        {
            label: "Cars",
            value: 2,
            icon: "car",
            backgroundColor: "#fd9644",
        },
        {
            label: "Camera",
            value: 3,
            icon: "camera",
            backgroundColor: "#fed330",
        },
        {
            label: "Games",
            value: 4,
            icon: "cards",
            backgroundColor: "#26de81",
        },
        {
            label: "Clothing",
            value: 5,
            icon: "shoe-heel",
            backgroundColor: "#2bcbba",
        },
        {
            label: "Sports",
            value: 5,
            icon: "basketball",
            backgroundColor: "#45aaf2",
        },
        {
            label: "Movies & Music",
            value: 6,
            icon: "headphones",
            backgroundColor: "#4b7bec",
        },
    ];

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
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
