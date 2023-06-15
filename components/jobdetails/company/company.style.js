import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    // marginVertical: SIZES.medium,
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    // backgroundColor: 'red',
    // padding: 20,
  },
  flatcontainer: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    // backgroundColor: 'red',
    // padding: 20,
  },
  
  logoImage: {
    // width: "80%",
    // height: "80%",
    width: '100%',
    height: 300,
    resizeMode: 'stretch',
    // position: 'absolute',
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  jobTitle2: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    marginBottom: SIZES.small
  },
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});

export default styles;
