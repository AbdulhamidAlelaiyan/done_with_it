import React from "react";
import { StyleSheet, View } from "react-native";

// Screens:
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import ProductsListScreen from "./src/screens/ProductsListScreen";
import ProductScreen from "./src/screens/ProductScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import MyAccountScreen from "./src/screens/MyAccountScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ListingEditScreen from "./src/screens/ListingEditScreen";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <WelcomeScreen /> */}
            {/* <ViewImageScreen /> */}
            {/* <ProductsListScreen /> */}
            {/* <ProductScreen /> */}
            <MessagesScreen />
            {/* <MyAccountScreen /> */}
            {/* <LoginScreen /> */}
            {/* <RegisterScreen /> */}
            {/* <ListingEditScreen /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
