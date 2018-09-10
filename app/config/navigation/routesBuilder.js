import React from "react";
import _ from "lodash";
import { createStackNavigator } from "react-navigation";
import { withRkTheme } from "react-native-ui-kitten";
import { NavBar } from "../../components/index";
import transition from "./transitions";
import { MainRoutes, MenuRoutes } from "./routes";

let main = {};
let flatRoutes = {};
MenuRoutes.map(function(route, index) {
  let wrapToRoute = route => {
    return {
      screen: withRkTheme(route.screen),
      title: route.title
    };
  };

  flatRoutes[route.id] = wrapToRoute(route);
  main[route.id] = wrapToRoute(route);
  for (let child of route.children) {
    flatRoutes[child.id] = wrapToRoute(child);
  }
});

let ThemedNavigationBar = withRkTheme(NavBar);

const DrawerRoutes = Object.keys(main).reduce((routes, name) => {
  let stack_name = name;
  routes[stack_name] = {
    name: stack_name,
    screen: createStackNavigator(flatRoutes, {
      initialRouteName: name,
      headerMode: "screen",
      cardStyle: { backgroundColor: "transparent" },
      transitionConfig: transition,
      navigationOptions: ({ navigation, screenProps }) => ({
        gesturesEnabled: false,
        header: headerProps => {
          const { scene } = headerProps;
          const { options } = scene.descriptor;
          return (
            <ThemedNavigationBar
              navigation={navigation}
              scene={scene}
              options={options}
            />
          );
        }
      })
    })
  };
  return routes;
}, {});

export const AppRoutes = DrawerRoutes;
export const ArticleRoutes = _.find(MainRoutes, { id: "ArticlesMenu" })
  .children;
export const MessagingRoutes = _.find(MainRoutes, { id: "MessagingMenu" })
  .children;
