import styled, { DefaultTheme } from "styled-components/native";

const sizeVariant = { small: 1, medium: 2, large: 3 };

type Sizes = keyof typeof sizeVariant;

const positionVariant = {
  top: "marginTop",
  right: "marginRight",
  bottom: "marginBottom",
  left: "marginLeft",
};

type Positions = keyof typeof positionVariant;

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

export const Spacer = styled.View`
  ${({
    position,
    size,
    theme,
  }: {
    position: Positions;
    size: Sizes;
    theme: DefaultTheme;
  }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
