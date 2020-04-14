import { css } from "styled-components";
import Color from "color";

export const color = {
  // Color system
  gray100: "#d5d8dc", // Iron
  gray200: "#939598", // Oslo Gray
  gray300: "#424244", // Ship Gray
  gray400: "#231f20", // Thunder

  // Theme Colors
  primary: "#1165a8", // Tory Blue
  primaryDark: "#072f50", // Tarawera
  primaryLight: "#8dcdff", // Anakiwa
  secondary: "#d5d8dc", // Iron
  success: "#28a745", // Green
  warning: "#ffc107", // Orange
  danger: "#dc3545", // Danger

  // Background
  //
  // Setting background elements.
  // backgroundBody: "#424244",
  backgroundBody: "#FFFFFF",

  backgroundLight: "#ffffff",

  // Text
  //
  // Style text elements.
  textDark: "#343a40",
  textMedium: "#5e6C84",
  // textLight: "#f8f9fa",
  textLight: "#21242C",
  textLink: "#1165a8",

  // Components
  //
  // Define common styles and more.
  borderColor: "#565658",
  borderInputFocus: "#1165a8",

  // Forms
  inputBackground: "#ffffff",
  inputColor: "#495057"
};

export const font = {
  regular:
    'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-weight: normal;',
  bold: 'font-family: "Open Sans"; font-weight: 700;',
  size: size => `font-size: ${size}rem;`
};

export const mixin = {
  darken: (colorValue, amount) =>
    Color(colorValue)
      .darken(amount)
      .string(),
  lighten: (colorValue, amount) =>
    Color(colorValue)
      .lighten(amount)
      .string(),
  rgba: (colorValue, opacity) =>
    Color(colorValue)
      .alpha(opacity)
      .string(),
  boxShadowMedium: css`
    box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
      0 10px 30px ${color.backgroundBody};
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  link: (colorValue = color.textLink) => css`
    cursor: pointer;
    color: ${colorValue};
    ${font.regular}
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `,
  backgroundImage: imageURL => css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
`
};
