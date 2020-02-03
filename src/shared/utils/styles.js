import Color from "color";

export const color = {
  // Color system
  primary: "#0d6efd", // Blue
  secondary: "#cccccc", // Light Grey
  success: "#28a745", // Green
  warning: "#ffc107", // Orange
  danger: "#dc3545", // Danger

  // Background
  //
  // Setting background elements.
  backgroundBody: "#ffffff",
  backgroundLight: "#ffffff",

  // Text
  //
  // Style text elements.
  textDark: "#343a40", // Dark Text
  textLight: "#f8f9fa", // Light Text
  textLink: "#0d6efd",

  // Components
  //
  // Define common styles and more.
  borderColor: "#dee2e6",
  borderInputFocus: "#0d6efd",

  // Forms
  inputBackground: "#ffffff",
  inputColor: "#495057"
};

export const mixin = {
  darken: (colorValue, amount) =>
    Color(colorValue)
      .darken(amount)
      .string(),
  lighten: (colorValue, amount) =>
    Color(colorValue)
      .ligthen(amount)
      .string()
};

export const font = {
  regular:
    'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-weight: normal;',
  bold: 'font-family: "Open Sans"; font-weight: 700;',
  size: size => `font-size: ${size}rem;`
};
