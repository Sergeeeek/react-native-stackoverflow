import React from "react";
import { connect } from "react-redux";
import { logoutSuccess } from "./actions";
import LogoutView from "./LogoutView";

class LogoutContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        this.props.logoutSuccess();
        this.props.navigation.navigate("Login");
    }

    render() {
        return <LogoutView onLogout={this.onLogout} />;
    }
};

export default connect(undefined, { logoutSuccess })(LogoutContainer);