import React from "react";
import { Container } from "native-base";
import { ProgramsTab, QueTab } from "../index";

export class HomePage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home".toUpperCase()
  });

  constructor(props) {
    super(props);
    this.state = {
      currentTab: "Home"
    };
  }

  render() {
    return (
      <Container>
        <Text
          style={{
            fontSize: 15,
            textAlign: "justify"
          }}
        >
          Hello World!
        </Text>
      </Container>
    );
  }
}
