import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default () => {
    const [location, setLocation] = useState();

    const requestForegroundLocationPermission = async () => {
        try {
            const { status } = await Location.getForegroundPermissionsAsync();
            if (status === "granted") {
                const { coords } = await Location.getCurrentPositionAsync({});
                setLocation(coords);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        requestForegroundLocationPermission();
    }, []);

    return location;
};
