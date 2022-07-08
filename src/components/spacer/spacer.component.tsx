import { FC } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";

type Sizes = keyof typeof sizeVariant;

type Positions = keyof typeof positionVariant;

type SpacerProps = {
  position: Positions;
  size: Sizes;
};

const sizeVariant = { small: 1, medium: 2, large: 3 };

const positionVariant = {
  top: "marginTop",
  right: "marginRight",
  bottom: "marginBottom",
  left: "marginLeft",
};

const getVariant: (
  position: Positions,
  size: Sizes,
  theme: DefaultTheme
) => string = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

export const SpacerView = styled.View`
  ${({ variant }: { variant: string }) => variant}
`;

export const Spacer: FC<SpacerProps> = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
