import React from "react";
import { TouchableHighlight, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default props => {
    const { source, size = 30, style, ...rest } = props;
    const imageSize = Math.floor(size * 0.75);

    return <TouchableHighlight style={{ width: size, height: size, ...style }} {...rest}>
        <Image
            style={{ width: imageSize, height: imageSize }}
            source={source}
        />
    </TouchableHighlight>
};