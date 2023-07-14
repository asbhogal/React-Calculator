import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/200.css";

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
  },
  components: {
    Box: {
      variants: {
        "theme-1": {
          bg: "#3b4664",
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
      sizes: {
        height: "40px",
      },
      variants: {
        "theme-1": {
          bg: "#eae3db",
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
  styles: {
    global: {
      body: {
        variants: {
          "theme-1": {
            bg: "#3b4664",
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
  },
});

export default theme;
