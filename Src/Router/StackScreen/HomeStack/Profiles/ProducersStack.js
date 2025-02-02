import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BeatmakerScreen from "../../../../Screens/Home/Profiles/Producers/BeatmakerScreen";
import ComposerScreen from "../../../../Screens/Home/Profiles/Producers/ComposerScreen";
import MixingScreen from "../../../../Screens/Home/Profiles/Producers/MixingScreen";
import ProducersScreen from "../../../../Screens/Home/Profiles/Producers/ProducersScreen";
import BeatmakerFilterScreen from "../../../../Screens/Filter/Profiles/Producers/BeatmakerFilterScreen";
import ComposerFilterScreen from "../../../../Screens/Filter/Profiles/Producers/ComposerFilterScreen";
import MixingFilterScreen from "../../../../Screens/Filter/Profiles/Producers/MixingFilterScreen";
import ProducersFilterScreen from "../../../../Screens/Filter/Profiles/Producers/ProducersFilterScreen";
import SongwriterScreen from "../../../../Screens/Home/Profiles/Producers/SongwriterScreen";
import SongwriterFilterScreen from "../../../../Screens/Filter/Profiles/Producers/SongwriterFilterScreen";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();
export default function ProducersStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProducersScreen"
        component={ProducersScreen}
        options={{
          headerShown: true,
          title: t("producer"),
          headerRight: () => <HeaderRight screenName="ProducersFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="BeatmakerScreen"
        component={BeatmakerScreen}
        options={{
          headerShown: true,
          title: t("beatmaker"),
          headerRight: () => <HeaderRight screenName="BeatmakerFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="ComposerScreen"
        component={ComposerScreen}
        options={{
          headerShown: true,
          title: "composer",
          headerRight: () => <HeaderRight screenName="ComposerFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="MixingScreen"
        component={MixingScreen}
        options={{
          headerShown: true,
          title: t("mixing"),
          headerRight: () => <HeaderRight screenName="MixingFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="SongwriterScreen"
        component={SongwriterScreen}
        options={{
          headerShown: true,
          title: t("songwriter"),
          headerRight: () => (
            <HeaderRight screenName="SongwriterFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="BeatmakerFilterScreen"
        component={BeatmakerFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="ComposerFilterScreen"
        component={ComposerFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="MixingFilterScreen"
        component={MixingFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="ProducersFilterScreen"
        component={ProducersFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="SongwriterFilterScreen"
        component={SongwriterFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
    </Stack.Navigator>
  );
}
