import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function UserProfileHeaderHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            buttonStyle={styles.chip}
            title={"Management"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsManagementStack");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Performance"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsPerformanceStack");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Producers"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsProducersStack");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Technical"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsTechnicalStack");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Visual"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsVisualStack");
              }
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  chip: {
    marginHorizontal: 10,
  },
});
