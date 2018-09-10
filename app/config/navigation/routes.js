import React from "react";
import { FontIcons } from "../../assets/icons";
import * as Screens from "../../screens/index";
import _ from "lodash";

export const MainRoutes = [
  {
    id: "HomeMenu",
    title: "Home",
    icon: "md-home",
    screen: Screens.GridV2,
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
  screen: Screens.GridV2,
  children: []
});

export const MenuRoutes = menuRoutes;
