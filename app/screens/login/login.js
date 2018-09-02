import React from "react";
import {
  View,
  Image,
  Alert,
  Keyboard,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet
} from "react-native-ui-kitten";
import { GradientButton } from "../../components/gradientButton";
import { RkTheme } from "react-native-ui-kitten";
import { scaleVertical } from "../../utils/scale";
// import * as loginService from "../../serviceActions/login";

function renderIf(condition, content) {
  if (condition) {
    return content;
  } else {
    return null;
  }
}

export class LoginV2 extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }

  _onAuthenticate() {
    let navigation = this.props.navigation;
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!this.state.email || !re.test(this.state.email)) {
    //   Alert.alert(
    //     "Invalid Email",
    //     "Please enter valid email.",
    //     [{ text: "Ok", onPress: () => {} }],
    //     { cancelable: false }
    //   );
    //   return;
    // }

    // if (
    //   !this.state.password ||
    //   this.state.password.toString().trim().length < 6
    // ) {
    //   Alert.alert(
    //     "Invalid Password",
    //     "Invalid length of password.",
    //     [{ text: "Ok", onPress: () => {} }],
    //     { cancelable: false }
    //   );
    //   return;
    // }

    let userInfo = { id: "1234" };
    AsyncStorage.setItem("USER_DETAILS", userInfo);
    navigation.navigate("App");
    //this.setState({ isLoading: true });
    // loginService
    //   .loginUser(user)
    //   .then(response => {
    //     let userInfo = JSON.stringify(response);
    //     AsyncStorage.setItem("USER_DETAILS", userInfo);
    //     navigation.navigate("Event");
    //   })
    //   .catch(error => {
    //     this.setState({ isLoading: false });
    //     let errorMessage = error;
    //     Alert.alert(
    //       "Error",
    //       errorMessage,
    //       [{ text: "Cancel", onPress: () => {} }],
    //       { cancelable: false }
    //     );
    //   });
  }

  render() {
    let renderIcon = () => {
      if (RkTheme.current.name === "light")
        return (
          <Image
            style={styles.image}
            source={require("../../assets/images/logo.png")}
          />
        );
      return (
        <Image
          style={styles.image}
          source={require("../../assets/images/logo.png")}
        />
      );
    };

    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
      >
        <View style={[styles.header, styles.loginHeader]}>
          {renderIcon()}
          <RkText rkType="light h1">Tie</RkText>
          <RkText rkType="logo h0">Pune</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput
              rkType="rounded"
              onChangeText={text => this.setState({ email: text })}
              placeholder="Username"
              style={styles.loginInput}
            />
            <RkTextInput
              rkType="rounded"
              onChangeText={text => this.setState({ password: text })}
              placeholder="Password"
              secureTextEntry={true}
              style={styles.loginInput}
            />
            <GradientButton
              colors={["#E7060E", "#f55050"]}
              style={styles.save}
              rkType="large"
              text="LOGIN"
              onPress={this._onAuthenticate.bind(this)}
            />
          </View>
        </View>
        {renderIf(
          this.state.isLoading,
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </RkAvoidKeyboard>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: theme.colors.screen.base
  },
  image: {
    //height: scaleVertical(77),
    //resizeMode: 'contain'
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  content: {
    justifyContent: "space-between"
  },
  save: {
    marginVertical: 20,
    borderRadius: 0,
    backgroundColor: "#ed1b24"
  },
  buttons: {
    flexDirection: "row",
    marginBottom: scaleVertical(24),
    marginHorizontal: 24,
    justifyContent: "space-around"
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    borderColor: theme.colors.border.solid
  },
  footer: {},
  loading: {
    position: "absolute",
    left: 0,
    backgroundColor: "black",
    opacity: 0.5,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  loginInput: {
    borderRadius: 0,
    borderWidth: 1,
    fontSize: 13,
    padding: 5
  },
  loginHeader: {
    marginBottom: 20
  },
  eternusLogo: {
    height: scaleVertical(25),
    resizeMode: "contain"
  }
}));
