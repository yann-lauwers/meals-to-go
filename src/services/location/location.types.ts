import { Camelize } from "camelize-ts";
import { locations } from "./location.mock";

export type Keys = keyof typeof locations;
export type Values = typeof locations[Keys];
export type Location = Values["results"];

export type LocationTransformReturn = Camelize<
  Values["results"][number]["geometry"]["location"] &
    Pick<Values["results"][number]["geometry"], "viewport">
>;
