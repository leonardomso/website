const lightTheme = {
  primary: "#000000",
  secondary: "#FFFFFF",
  lightGray: "#EAEAEA",
  darkGray: "#B7B7B7",
};

const darkTheme = {
  primary: "#FFFFFF",
  secondary: "#151419",
  lightGray: "#212128",
  darkGray: "#B7B7B7",
};

const theme = (mode) => (mode === "dark" ? darkTheme : lightTheme);

export default theme;
