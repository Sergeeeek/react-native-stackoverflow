import React from "react";
import { connect } from "react-redux";
import HomePageView from "./HomePageView";

const HomePageContainerComponent = ({ username }) => (
    <HomePageView username={username} />
);

const mapStateToProps = state => ({
    username: state.login.username,
});

export default connect(mapStateToProps)(HomePageContainerComponent);