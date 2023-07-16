import { extendTheme } from "@chakra-ui/react";

import "@fontsource/inter/200.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
  },
  components: {
    Flex: {
      variants: {
        "theme-1": {
          bg: "#000",
          color: "white",
        },
        "theme-2": {
          bg: "blue",
          color: "white",
        },
        "theme-3": {
          bg: "green.500",
          color: "white",
        },
      },
    },
    Box: {
      variants: {
        "theme-1": {
          bg: "#000000",
          color: "#000",
        },
        "theme-2": {
          bg: "#e6e6e6",
        },
        "theme-3": {
          bg: "#17062a",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "0",
        padding: "30px 0",
      },
      variants: {
        "theme-1": {
          bg: "#323232",
          color: "#f0f0f0",
        },
        "theme-2": {
          bg: "#e5e4e0",
        },
        "theme-3": {
          bg: "#331b4d",
        },
      },
    },
  },
  /* styles: {
    global: {
      body: {
        variants: {
          "theme-1": {
            bg: "#000000",
          },
          "theme-2": {
            bg: "#e6e6e6",
          },
          "theme-3": {
            bg: "#17062a",
          },
        },
      },
    },
  }, */
});

export default theme;
