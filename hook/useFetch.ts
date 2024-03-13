import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

type queryType = {
  query: string;
  num_pages: number;
};

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

type hookValue = {
  data: fetchDataType[];
  isLoading: boolean;
  refetch: () => void;
  error: AxiosError<unknown, any> | undefined;
};

const useFetch = (endpoint: string, query: queryType): hookValue => {
  const [data, setData] = useState<fetchDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError<unknown, any> | undefined>(
    undefined
  );

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "f8a6283890msh85a88cddfb891edp105cc0jsne52d748a20d2",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = () => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .request<fetchDataType[]>(options)
      .then((response) => {
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error as AxiosError<unknown, any>);
        alert("There in an error");
        // alert(error as AxiosError<unknown, any>);
      })
      .finally(() => setIsLoading(false));
    controller.abort();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
