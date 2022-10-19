import camelize from "camelize-ts";
import { locations } from "./location.mock";
import { Keys, LocationTransformReturn, Values } from "./location.types";

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

export const locationTransform: (result: Values) => LocationTransformReturn = (
  result
) => {
  const formattedResponse = camelize(result);
  const { geometry } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  const { viewport } = geometry;
  return { lat, lng, viewport };
};
