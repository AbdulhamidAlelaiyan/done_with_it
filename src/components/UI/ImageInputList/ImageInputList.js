import React, { useRef } from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";

import ImageInput from "../ImageInput";

const ImageInputList = ({ imageUris, onAddImage, onRemoveImage }) => {
    const scrollView = useRef();

    let images;
    if (imageUris.length) {
        images = imageUris.map((imageUri) => (
            <ImageInput
                key={Math.random()}
                style={styles.image}
                imageUri={imageUri}
                onChangeImage={onRemoveImage.bind(null, imageUri)}
            />
        ));
    }

    return (
        <View>
            <ScrollView
                horizontal
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.container}>
                    {images}
                    <ImageInput
                        onChangeImage={async () => {
                            const result =
                                await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                        ImagePicker.MediaTypeOptions.Images,
                                    quality: 0.5,
                                });
                            if (!result.cancelled) {
                                onAddImage(result.uri);
                            }
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default ImageInputList;
