import React from "react";
import LottieView from "lottie-react-native";

const AppActivityIndicator = ({ visible = false, style }) => {
    if (!visible) return null;
    return (
        <LottieView
            loop
            autoPlay
            source={require("../../../../assets/animations/loader.json")}
            style={style}
        />
    );
};

export default AppActivityIndicator;
