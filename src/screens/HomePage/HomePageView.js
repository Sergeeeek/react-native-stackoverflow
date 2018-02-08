import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
    }
});

export default HomePageView = ({ username }) => (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello, {username}</Text>
    </SafeAreaView>
);