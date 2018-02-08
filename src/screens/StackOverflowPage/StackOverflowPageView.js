import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    FlatList,
    Text,
    Button
} from "react-native";
import {
    LOADING_STATE_ERROR,
    LOADING_STATE_LOADING,
} from "./reducer";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: "stretch",
        backgroundColor: "white",
    },
    errorContainer: {
        padding: 30,
        alignItems: "center",
    },
    errorText: {
        textAlign: "center",
    },
    item: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
});

const ListItem = ({ item }) => (
    <View style={styles.item}>
        <Text>{item.title}</Text>
    </View>
);

const keyExtractor = item => item.question_id;

export default StackOverflowPageView = ({ onLoadNext, onRefresh, questions, loadingState, error }) => {
    const hasError = loadingState === LOADING_STATE_ERROR;
    const refreshing = loadingState === LOADING_STATE_LOADING;

    return <SafeAreaView style={styles.page}>
        {!hasError &&
            <FlatList
                refreshing={refreshing}
                data={questions || []}
                onRefresh={onRefresh}
                renderItem={ListItem}
                keyExtractor={keyExtractor}
                onEndReached={onLoadNext}
            />
        }
        {hasError &&
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>An error occurred: {error}</Text>
                <Button title="Try Again" onPress={onRefresh} />
            </View>
        }
    </SafeAreaView>
};