import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/ListCard";

import styles from "./list.style";
import { useState } from "react";
import { useGet } from "../../../hook/useGet";

const List = ({title}) => {
  const router = useRouter();
  const { data, isLoading, error } = useGet(`movie/${title}`);

  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardPress = (item) => {
    router.push(`/movie-details/${item.id}`);
    setSelectedJob(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title  === "top_rated" ? "Top rated" :title  === "now_playing"? "now playing" : title} Movies</Text>
        <TouchableOpacity onPress={() => router.push(`/all-movies/${title}`)}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data?.results}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default List;
