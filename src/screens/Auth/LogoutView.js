import React from "react";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "stretch",
    },
    container: {
        height: 100,
        justifyContent: "space-between",
        alignItems: "stretch",
    },
    text: {
        fontSize: 30,
        textAlign: "center",
    },
});

export default ({ onLogout }) => (
    <SafeAreaView style={styles.page}>
        <View style={styles.container}>
            <Text style={styles.text}>Good Bye</Text>
            <Button title="Log Out" onPress={onLogout} />
        </View>
    </SafeAreaView>
);