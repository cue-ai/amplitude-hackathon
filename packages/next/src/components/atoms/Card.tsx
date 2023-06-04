import { type FC, type ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

export const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <Flex
    direction="column"
    alignItems="center"
    h="500px"
    minH="50vh"
    maxW="2xl"
    borderRadius="lg"
    background="linear-gradient(128.24deg, rgba(25, 26, 41, 0.9) 5.39%, rgba(25, 26, 41, 0.54) 101.42%)"
    border="2px solid #1F264B"
    backdropFilter="blue(42px)"
    mx="auto"
    p={6}
  >
    {children}
  </Flex>
);
