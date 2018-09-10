import React from "react";
import { FontIcons } from "../../assets/icons";
import * as Screens from "../../screens/index";
import _ from "lodash";

export const MainRoutes = [
  {
    id: "HomeMenu",
    title: "Home",
    icon: FontIcons.navigation,
    screen: Screens.GridV2,
    children: []
  },
  {
    id: 'ArticlesMenu',
    title: 'Articles',
    icon: FontIcons.article,
    screen: Screens.ArticleMenu,
    children: [
      {
        id: 'Articles1',
        title: 'Article List V1',
        screen: Screens.Articles1,
        children: []
      },
      {
        id: 'Articles2',
        title: 'Article List V2',
        screen: Screens.Articles2,
        children: []
      },
      {
        id: 'Articles3',
        title: 'Article List V3',
        screen: Screens.Articles3,
        children: []
      },
      {
        id: 'Articles4',
        title: 'Article List V4',
        screen: Screens.Articles4,
        children: []
      },
      {
        id: 'Blogposts',
        title: 'Blogposts',
        screen: Screens.Blogposts,
        children: []
      },
      {
        id: 'Article',
        title: 'Article View',
        screen: Screens.Article,
        children: []
      }
    ]
  },
  {
    id: 'ProfileV2',
    title: 'Profile',
    icon: FontIcons.profile,
    screen: Screens.ProfileV2,
    children: [
    ]
  },
  {
    id: 'ProfileSettings',
    title: 'Profile Settings',
    icon: FontIcons.profile,
    screen: Screens.ProfileSettings,
    children: [
    ]
  },
  {
    id: 'Notifications',
    title: 'Notifications',
    icon: FontIcons.profile,
    screen: Screens.Notifications,
    children: [
    ]
  },
  {
    id: 'Contacts',
    title: 'Contacts',
    icon: FontIcons.profile,
    screen: Screens.Contacts,
    children: [
    ]
  },
  {
    id: 'Feed',
    title: 'Feed',
    icon: FontIcons.profile,
    screen: Screens.Feed,
    children: [
    ]
  },
  {
    id: 'MessagingMenu',
    title: 'Messaging',
    icon: FontIcons.mail,
    screen: Screens.MessagingMenu,
    children: [
      {
        id: 'Chat',
        title: 'Chat',
        screen: Screens.Chat,
        children: []
      },
      {
        id: 'ChatList',
        title: 'Chat List',
        screen: Screens.ChatList,
        children: []
      },
      {
        id: 'Comments',
        title: 'Comments',
        screen: Screens.Comments,
        children: []
      },
    ]
  },
  {
    id: "Dashboard",
    title: "Dashboard",
    icon: FontIcons.dashboard,
    screen: Screens.Dashboard,
    children: [
    ]
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
