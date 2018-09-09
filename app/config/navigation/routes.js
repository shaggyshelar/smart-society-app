import React from "react";
import { View } from "react-native";
import { RkText, RkStyleSheet } from "react-native-ui-kitten";
import { FontIcons } from "../../assets/icons";
import * as Screens from "../../screens/index";
import _ from "lodash";

export class HomePageMenuScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.mainView}>
        {/* <HomePage navigation={this.props.navigation} /> */}
        <RkText rkType="small">YYYYYYYYYYY</RkText>
      </View>
    );
  }
}

export const MainRoutes = [
  {
    id: "HomeMenu",
    title: "Home",
    icon: "md-home",
    screen: HomePageMenuScreen,
    children: []
  },
  {
    id: "Themes",
    title: "Themes",
    icon: FontIcons.theme,
    screen: Screens.Themes,
    children: []
  }
];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: "GridV2",
  title: "Start",
  //screen: Screens.GridV2,
  screen: HomePageMenuScreen,
  children: []
});

export const MenuRoutes = menuRoutes;


const styles = RkStyleSheet.create(theme => ({
  mainView : {
    backgroundColor: theme.colors.screen.base,
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center'
  }
}));