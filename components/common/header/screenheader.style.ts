import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
  DimensionValue,
  Animated,
  StyleProp,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: {
    width: 40,
    height: 40,
    borderRadius: SIZES.small / 1.25,
  },
});

const getBtnImgStyle = (
  dimension: string | number | Animated.AnimatedNode | null
): StyleProp<ImageStyle> => ({
  ...styles.btnImg,
  width: dimension ? (dimension as DimensionValue) : 40,
  height: dimension ? (dimension as DimensionValue) : 40,
});

export { getBtnImgStyle, styles };
