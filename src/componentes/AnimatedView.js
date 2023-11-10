import React, { useEffect } from "react";
import { Animated } from "react-native";

export default function AnimetedView({ width, length, color = null }) {

    const AnimatedValue = new Animated.Value(0);

    useEffect(() => {
        circleAnimated();

        return () => circleAnimated();
    }, []);

    const circleAnimated = () => {
        AnimatedValue.setValue(0)
        Animated.timing(
            AnimatedValue,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }
        ).start(() => {
            setTimeout(() => {
                circleAnimated()
            }, 1000);
        })
    }

    const translateX = AnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, length]
    });


    return <Animated.View
        style={{
            width: width,
            height: '100%',
            opacity: 0.4,
            backgroundColor: color ? color : "#FFF",
            transform: [{ translateX: translateX }],
        }}>
    </Animated.View>
}
