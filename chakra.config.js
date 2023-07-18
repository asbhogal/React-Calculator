import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import "@fontsource/inter/200.css";
import "@fontsource/inter/400.css";
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
          bg: "#000000",
          color: "white",
        },
        "theme-2": {
          bg: "#ffffff",
          color: "#111111",
        },
        "theme-3": {
          bg: "#3D495C",
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
          bg: "#ffffff",
        },
        "theme-3": {
          bg: "#3D495C",
        },
      },
    },
    Button: {
      baseStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0",
        padding: "30px 0",
        fontWeight: "400",
      },
      variants: {
        "theme-1": {
          bg: "#333333",
          color: "#f0f0f0",
          _hover: {
            bg: "#111111",
          },
        },
        "theme-2": {
          bg: "#edf2f7",
          color: "#111111",
          _hover: {
            bg: "#cacfd3",
          },
        },
        "theme-3": {
          bg: "#21395C",
          _hover: {
            bg: "#95B3E1",
          },
        },
      },
    },
    Text: {
      variants: {
        "theme-1": {
          color: "#e6e6e6",
        },
        "theme-2": {
          color: "#e6e6e6",
        },
        "theme-3": {
          color: "#e6e6e6",
        },
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#000000", "#e6e6e6")(props),
      },
      "::-webkit-scrollbar": {
        height: "0.1em",
        width: "0.1em",
        backgroundColor: "transparent",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: mode("#dddddd")(props),
        borderRadius: "0.5em",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: mode("#718096", "#718096")(props),
      },
    }),
  },
});

export default theme;
