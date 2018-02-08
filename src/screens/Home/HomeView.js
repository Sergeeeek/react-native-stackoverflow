import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

import LogoutContainer from "../Auth/LogoutContainer";
import HomePageContainer from "../HomePage/HomePageContainer";
import StackOverflowPageContainer from "../StackOverflowPage/StackOverflowPageContainer";

const styles = StyleSheet.create({
    hamburger: {
        paddingLeft: 12,
        flex: 1,
        justifyContent: "center",
    },
});

const HamburgerButton = ({ navigation }) => {
    return <TouchableOpacity style={styles.hamburger} activeOpacity={0.7} onPress={() => navigation.navigate("DrawerToggle")}>
        <FontAwesome name="navicon" size={24} />
    </TouchableOpacity>
}

const HomePage = StackNavigator({
    HomePage: {
        name: "HomePageStack",
        screen: HomePageContainer,
        navigationOptions: ({ navigation }) => ({
            title: "Home",
            headerLeft: (
                <HamburgerButton navigation={navigation} />
            ),
        }),
    },
});

const StackOverflowPage = StackNavigator({
    StackOverflowPage: {
        name: "StackOverflowPageStack",
        screen: StackOverflowPageContainer,
        navigationOptions: ({ navigation }) => ({
            title: "StackOverflow Questions",
            headerLeft: (
                <HamburgerButton navigation={navigation} />
            ),
        })
    }
});

const LogoutPage = StackNavigator({
    LoogutPage: {
        name: "LogoutPageStack",
        screen: LogoutContainer,
        navigationOptions: ({ navigation }) => ({
            title: "Log Out",
            headerLeft: (
                <HamburgerButton navigation={navigation} />
            )
        }),
    },
});

export default Home = DrawerNavigator({
    HomePage: {
        screen: HomePage,
    },
    StackOverflowPage: {
        screen: StackOverflowPage,
    },
    LogoutPage: {
        screen: LogoutPage,
    },
});