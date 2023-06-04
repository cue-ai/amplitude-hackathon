import { transparentize } from "@chakra-ui/theme-tools";

const baseStyle = {
  container: {
    transition: "all 0.2s",
    _hover: {
      borderColor: transparentize("brand.500", 0.5),
      backgroundColor: transparentize("brand.500", 0.4),
    },
  },
};

export default {
  baseStyle,
};
