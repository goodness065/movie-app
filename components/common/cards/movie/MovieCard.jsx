import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./moviecard.style";


const MovieCard = ({ movie, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
           source={{
            uri: movie?.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {movie?.title}
        </Text>

        <Text style={styles.jobType}>{movie?.original_language}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
