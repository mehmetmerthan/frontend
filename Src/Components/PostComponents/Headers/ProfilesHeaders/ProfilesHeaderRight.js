import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
export default function ProfileHeaderRight({ screenName }) {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="filter"
      size={24}
      style={styles.headerRight}
      color="black"
      onPress={() => {
        {
          navigation.navigate(screenName);
        }
      }}
    />
  );
}
const styles = StyleSheet.create({
  headerRight: {
    marginRight: 20,
  },
});
