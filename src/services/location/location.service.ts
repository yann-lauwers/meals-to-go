import camelize, { Camelize } from "camelize-ts";
import { Keys, locations, Values } from "./location.mock";

export const locationRequest: (searchTerm: Keys) => any = async (
  searchTerm
) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform: (
  result: Values
) => Camelize<Values["results"][number]["geometry"]["location"]> = (result) => {
  const formattedResponse = camelize(result);
  const { geometry } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
