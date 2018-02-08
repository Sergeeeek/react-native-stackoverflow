import React from "react";
import { connect } from "react-redux";
import { loginSuccess } from "./actions";
import { LoginView } from "./LoginView";

class LoginContainerComponent extends React.PureComponent {
    onLogin = (user, pass) => {
        this.props.loginSuccess(user);
        this.props.navigation.replace("Home");
    }

    render() {    
        return <LoginView onLogin={this.onLogin} />
    }
};

export const LoginContainer = connect(undefined, { loginSuccess })(LoginContainerComponent);