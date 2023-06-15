import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./listcard.style";

const ListCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: item?.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.popularity} -
          </Text>
          <Text style={styles.location}> {item.original_language}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;
