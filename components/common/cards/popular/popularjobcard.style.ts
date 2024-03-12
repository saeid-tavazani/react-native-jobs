import { StyleSheet, ViewStyle, TextStyle } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants";

interface StyleProps {
  selectedJob: string;
  item: any;
}

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

export const getContainerStyle = ({
  selectedJob,
  item,
}: StyleProps): ViewStyle => ({
  ...styles.container,
  backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
});

export const getLogoContainerStyle = ({
  selectedJob,
  item,
}: StyleProps): ViewStyle => ({
  ...styles.logoContainer,
  backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
});

export const getJobNameStyle = ({
  selectedJob,
  item,
}: StyleProps): TextStyle => ({
  ...styles.jobName,
  color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
});

export const getPublisherStyle = ({
  selectedJob,
  item,
}: StyleProps): TextStyle => ({
  ...styles.publisher,
  color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
});
