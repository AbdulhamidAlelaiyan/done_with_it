import React from "react";
import { Modal, View } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import styles from "./styles.js";
import colors from "../../config/colors.js";

const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar
                        color={colors.primary}
                        progress={progress}
                        width={200}
                    />
                ) : (
                    <LottieView
                        autoPlay
                        loop={false}
                        style={styles.animation}
                        onAnimationFinish={onDone}
                        source={require("../../../assets/animations/done.json")}
                    />
                )}
            </View>
        </Modal>
    );
};

export default UploadScreen;
