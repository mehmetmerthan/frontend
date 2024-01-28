import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign , MaterialIcons } from "@expo/vector-icons";
import MessageStack from "../StackScreen/MessageStack";
import CreateStackScreen from "../StackScreen/CreateStack";
import NotificationStackScreen from "../StackScreen/NotificationStack";
import ProfileStackScreen from "../StackScreen/ProfileStack";
import HomeStack from "../StackScreen/HomeStack";
const Tab = createBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Message"
      component={MessageStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="message" color={color} size={size} />
        ),
        headerShown: false,
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="Create"
      component={CreateStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign
            name="home"
            color={color}
            size={size}
          />
        ),
        headerShown: false,
        tabBarBadge: 5,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default BottomTab;
