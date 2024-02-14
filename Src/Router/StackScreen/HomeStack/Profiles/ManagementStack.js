import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ManagementScreen from "../../../../Screens/Home/Profiles/Management/ManagementScreen";
import ManagementFilterScreen from "../../../../Screens/Filter/Profiles/Management/ManagementFilterScreen";
import ManagerScreen from "../../../../Screens/Home/Profiles/Management/ManagerScreen";
import ManagerFilterScreen from "../../../../Screens/Filter/Profiles/Management/ManagerFilterScreen";
import PublicistScreen from "../../../../Screens/Home/Profiles/Management/PublicistScreen";
import PublicistFilterScreen from "../../../../Screens/Filter/Profiles/Management/PublicistFilterScreen";
import ProfileHeaderRight from "../../../../Components/PostComponents/Headers/ProfilesHeaders/ProfilesHeaderRight";
const Stack = createStackNavigator();
export default function ManagementStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ManagementScreen"
        component={ManagementScreen}
        options={{
          headerShown: true,
          title: "Profiles",
          headerRight: () => (
            <ProfileHeaderRight screenName="ManagementFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="ManagerScreen"
        component={ManagerScreen}
        options={{
          headerShown: true,
          title: "Manager",
          headerRight: () => (
            <ProfileHeaderRight screenName="ManagerFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="PublicistScreen"
        component={PublicistScreen}
        options={{
          headerShown: true,
          title: "Publicist",
          headerRight: () => (
            <ProfileHeaderRight screenName="PublicistFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="ManagementFilterScreen"
        component={ManagementFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="ManagerFilterScreen"
        component={ManagerFilterScreen}
        options={{
          headerShown: false,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="PublicistFilterScreen"
        component={PublicistFilterScreen}
        options={{
          headerShown: false,
          title: "Filter",
        }}
      />
    </Stack.Navigator>
  );
}
