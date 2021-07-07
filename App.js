import React from "react";
import { StyleSheet, View } from "react-native";

// Screens:
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import ProductsListScreen from "./src/screens/ProductsListScreen";
import ProductScreen from "./src/screens/ProductScreen";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <WelcomeScreen /> */}
            <ViewImageScreen />
            {/* <ProductsListScreen /> */}
            {/* <ProductScreen /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
