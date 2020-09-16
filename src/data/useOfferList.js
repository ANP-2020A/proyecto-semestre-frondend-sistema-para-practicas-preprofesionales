/**
 * Created by chalosalvador on 8/18/20
 */
import useSWR from "swr";
import API from "./index";

export const useOfferList = () => {
  const { data, error, mutate } = useSWR("/offers", API.fetcher);

  return {
    offers: data && data.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
