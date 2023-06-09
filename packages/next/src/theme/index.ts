import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import * as components from "./components";
import * as foundations from "./foundations";

export const theme: Record<string, any> = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  ...foundations,
  components: { ...components },
  colors: {
    ...baseTheme.colors,
    brand: baseTheme.colors.blue,
  },
  space: {
    "4.5": "1.125rem",
  },
});
