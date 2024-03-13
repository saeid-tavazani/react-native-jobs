import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: SIZES.xLarge,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
  },
  publisher: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export const getContainerStyle = (
  selectedJob: string,
  item: string
): ViewStyle => ({
  ...styles.container,
  backgroundColor: selectedJob === item ? COLORS.primary : "#FFF",
});

export const getLogoContainerStyle = (
  selectedJob: string,
  item: string
): ViewStyle => ({
  ...styles.logoContainer,
  backgroundColor: selectedJob === item ? "#FFF" : COLORS.white,
});

export const getJobNameStyle = (
  selectedJob: string,
  item: string
): TextStyle => ({
  ...styles.jobName,
  color: selectedJob === item ? COLORS.white : COLORS.primary,
});

export const getPublisherStyle = (
  selectedJob: string,
  item: string
): TextStyle => ({
  ...styles.publisher,
  color: selectedJob === item ? COLORS.white : COLORS.primary,
});
export default styles;
