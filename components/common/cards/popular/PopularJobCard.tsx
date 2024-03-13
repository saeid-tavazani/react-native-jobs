import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles, {
  getContainerStyle,
  getLogoContainerStyle,
  getJobNameStyle,
} from "./popularjobcard.style";

type fetchDataType = {
  employer_name: string;
  employer_logo: string;
  employer_website: null | string;
  employer_company_type: string;
  job_publisher: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_latitude: number;
  job_longitude: number;
  job_google_link: string;
  job_offer_expiration_datetime_utc: string;
  job_offer_expiration_timestamp: number;
};
import { checkImageURL } from "../../../../utils";
const PopularJobCard = ({
  item,
  selectedJob,
  handleCartPress,
}: {
  item: fetchDataType;
  selectedJob: string;
  handleCartPress: any;
}) => {
  return (
    <TouchableOpacity
      style={getContainerStyle(selectedJob, item.job_id)}
      onPress={() => handleCartPress(item)}
    >
      <TouchableOpacity style={getLogoContainerStyle(selectedJob, item.job_id)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : `https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg`,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          style={getJobNameStyle(selectedJob, item.job_id)}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
