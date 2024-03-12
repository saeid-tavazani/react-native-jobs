import React from "react";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { getBtnImgStyle, styles } from "./screenheader.style";

type Props = {
  iconUrl: ImageSourcePropType; // Correct type for iconUrl
  dimension: string; // Assuming dimension is a string, adjust accordingly
  handlePress: () => void;
};

const ScreenHeaderBtn: React.FC<Props> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl} // Make sure iconUrl is of type ImageSourcePropType
        resizeMode="cover"
        style={getBtnImgStyle(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
