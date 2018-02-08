import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Button,
    TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: "center",
        alignItems: "stretch",
        flex: 1,
        backgroundColor: "white",
    },
    heading: {
        fontSize: 30,
        textAlign: "center",
    },
    loginBox: {
        height: "50%",
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: "space-between",
        marginBottom: -10,
    },
    inputContainer: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
    },
    inputIcon: {
        marginRight: 10,
    },
    textInput: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        flex: 1,
    },
});

const Input = ({ icon, onChange, ...rest }) => (
    <View style={styles.inputContainer}>
        <FontAwesome style={styles.inputIcon} name={icon} size={24} />
        <TextInput onChangeText={onChange} style={styles.textInput} {...rest}/>
    </View>
)

export class LoginView extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };

        this.onUserChange = this.onUserChange.bind(this);
        this.onPassChange = this.onPassChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onUserChange(username) {
        this.setState(s => ({
            ...s,
            username,
        }));
    }

    onPassChange(password) {
        this.setState(s => ({
            ...s,
            password,
        }));
    }

    onLogin() {
        this.props.onLogin(this.state.username, this.state.password);
    }

    render() {
        const { onLogin } = this.props;
        const valid = this.state.password.length > 0 && this.state.username.length > 0;

        return <View style={styles.loginContainer}>
            <View style={styles.loginBox}>
                <Text style={styles.heading}>Welcome</Text>
                <View>
                    <Input
                        icon="user"
                        value={this.state.username}
                        onChange={this.onUserChange}
                        placeholder="Username" />
                    <Input
                        icon="lock"
                        value={this.state.password}
                        onChange={this.onPassChange}
                        placeholder="Password"
                        secureTextEntry={true} />
                </View>
                <Button title="Login" disabled={!valid} onPress={this.onLogin} />
            </View>
        </View>;
    }
}