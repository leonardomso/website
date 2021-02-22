import { extendTheme } from "@chakra-ui/react";

const config = {
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "16px",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        lineHeight: "30px",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
    }),
  },
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config } as any);

export default theme;
