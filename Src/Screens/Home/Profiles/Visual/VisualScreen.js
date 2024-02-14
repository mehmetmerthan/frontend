import { FlatList, ActivityIndicator } from "react-native";
import { React, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listUsers } from "../../../../Utils/Queries/userProfileQueries";
import PostUser from "../../../../Components/PostComponents/PostUser";
import VisualHeader from "../../../../Components/PostComponents/Headers/ProfilesHeaders/Visual/VisualHeader";
import { useRoute } from "@react-navigation/native";
export default function VisualScreen() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postNextToken, setPostNextToken] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const route = useRoute();
  const { filter } = route?.params || {};
  const fetchItems = async () => {
    if (loading || refreshing) return;
    setLoading(true);
    const additionalFilters = [
      { tag_roles: { eq: "Photographer" } },
      { tag_roles: { eq: "Videographer" } },
      { tag_roles: { eq: "Director" } },
      { tag_roles: { eq: "Editor" } },
      { tag_roles: { eq: "Graphicer" } },
    ];
    const updatedFilter = filter
      ? { ...filter, or: [...filter.or, ...additionalFilters] }
      : { or: additionalFilters };
    try {
      const variables = {
        limit: 1,
        nextToken: postNextToken,
        filter: updatedFilter,
      };
      const result = await API.graphql({
        query: listUsers,
        variables: variables,
      });
      const newItems = result?.data?.listUsers?.items;
      const newNextToken = result?.data?.listUsers?.nextToken;
      setItems((prevItems) =>
        postNextToken ? [...prevItems, ...newItems] : newItems
      );
      setPostNextToken(newNextToken);
    } catch (error) {
      console.error("error fetching items", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    setItems([]);
    setPostNextToken(null);
    fetchItems();
  }, [filter]);

  const handleLoadMore = async () => {
    if (!loading && postNextToken && !refreshing) {
      await fetchItems();
    }
  };
  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => <PostUser item={item} index={index} />}
      keyExtractor={(item) => item.id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading && <ActivityIndicator />}
      onRefresh={() => {
        setRefreshing(true);
        setPostNextToken(null);
        fetchItems();
      }}
      refreshing={refreshing}
      ListHeaderComponent={<VisualHeader />}
      keyboardShouldPersistTaps="always"
    />
  );
}
