import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function VisualHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            type="outline"
            containerStyle={styles.chip}
            title={"Visual"}
            size="lg"
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Director"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("DirectorScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Editor"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("EditorScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Graphicer"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("GraphicerScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Photographer"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("PhotographerScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Videography"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("VideographyScreen");
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
