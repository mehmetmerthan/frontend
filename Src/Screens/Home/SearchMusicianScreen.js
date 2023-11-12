import { View, Text, Image, TouchableOpacity,ScrollView } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/SearchMusicianPostStyle";
import { Feather } from "@expo/vector-icons";
const SearchMusicianScreen = () => {
  const [isIconChanged, setIconChanged] = useState(false);
  const postData = [
    {
      username: "Amelie",
      contentText: "First post",
      musicStyles: ["Rock", "Pop"],
      musiciansNeeded: ["Guitarist", "Pianist"],
      userAvatar:
        "https://cdn.cliqueinc.com/posts/298233/clean-girl-beauty-looks-298233-1646073847519-image.600x0c.jpg?interlace=true&quality=70",
    },
    // Diğer postlar buraya eklenebilir.
  ];

  return (
    <ScrollView>
      {postData.map((post, index) => (
        <View style={styles.container} key={index}>
          <View style={styles.userInfo}>
            <Image
              style={styles.userAvatar}
              source={{ uri: post.userAvatar }}
            />
            <Text style={styles.username}>{post.username}</Text>
          </View>
          <Text style={styles.contentText}>{post.contentText}</Text>
          <Text style={styles.sectionHeadingText}>Music Styles</Text>
          <View style={styles.hStackContent}>
            {post.musicStyles.map((style, styleIndex) => (
              <View style={styles.hStackItemWrap} key={styleIndex}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{style}</Text>
                </View>
              </View>
            ))}
          </View>
          <Text style={styles.sectionHeadingText}>Instruments Played</Text>
          <View style={styles.hStackContent}>
            {post.musiciansNeeded.map((musician, musicianIndex) => (
              <View style={styles.hStackItemWrap} key={musicianIndex}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{musician}</Text>
                </View>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIconChanged(!isIconChanged)}
          >
            {isIconChanged ? (
              <Feather name="check-circle" size={24} color="green" />
            ) : (
              <Feather name="plus-circle" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default SearchMusicianScreen;
