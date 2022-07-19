import { MocksKeys, mocks, MocksValues, mockImages } from "./mock";
import camelize, { Camelize } from "camelize-ts";

export const restaurantsRequest: (location?: MocksKeys) => any = async (
  location = "37.7749295,-122.4194155"
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

type CustomResult = {
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
} & MocksValues["results"];

export const restaurantsTransform: (
  results: MocksValues
) => Camelize<CustomResult[]> = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      photos: [mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]],
    };
  });
  return camelize(mappedResults);
};
