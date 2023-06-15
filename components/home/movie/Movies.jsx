import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";

import styles from "./movies.style";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../common/cards/movie/MovieCard";

const Movies = () => {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie`,
        {
          params: {
            api_key: "1fe3d0290842d2b4e156001bdc2a0328",
            page: page.toString(),
          },
        }
      );
      setSearchResult(response.data.results);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = () => {
      setPage(page + 1);
      handleSearch();
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Movies</Text>
      </View>
      <View style={styles.cardsContainer}>
        {searchLoader ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : searchError ? (
          <Text>Something went wrong</Text>
        ) : (
          <View>
            {searchResult?.map((movie) => (
              <MovieCard
                movie={movie}
                key={`top-rated-${movie.id}`}
                handleNavigate={() => router.push(`/movie-details/${movie.id}`)}
              />
            ))}
            <View style={styles.footerContainer}>
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePagination()}
              >
                <Text style={{color: "#fff"}}>Load more</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Movies;
