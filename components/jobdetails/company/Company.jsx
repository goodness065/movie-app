import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import styles from "./company.style";
import { COLORS, SIZES, icons } from "../../../constants";

const Company = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
        }}
        resizeMode="contain"
        style={styles.logoImage}
      />
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{item.title}</Text>
      </View>
      <View style={styles.flatcontainer}>
        <FlatList
          data={item?.genres}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: COLORS.gray2,
                borderRadius: SIZES.small,
                padding: SIZES.small,
              }}
            >
              <Text style={{ color: "#fff" }}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
      <View>
        <Text style={styles.jobTitle2}>The Plot</Text>
        <Text>{item.overview}</Text>
      </View>
    </View>
  );
};

export default Company;
