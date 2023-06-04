import { type FC } from "react";
import { Box, Flex, Icon, Spacer, Spinner, Tag, Text } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

type LoadingCardItem = {
  title: string;
  current?: boolean;
  complete?: boolean;
};

export const LoadingCardItem: FC<LoadingCardItem> = ({
  title,
  current,
  complete,
}) => (
  <Flex
    w="full"
    align="center"
    justify="center"
    px={5}
    py={4}
    border="border"
    borderWidth={2}
    borderRadius="md"
    opacity={current ? 1 : 0.2}
    bg={complete ? "#0b3a1e" : "whiteAlpha.50"}
  >
    {complete && (
      <Icon size="lg" boxSize={6} as={AiFillCheckCircle} color="green.400" />
    )}
    {current && <Spinner size="md" />}
    <Text ml={2} color="whiteAlpha.900" fontSize="lg">
      {title}
    </Text>
    <Spacer />
  </Flex>
);
