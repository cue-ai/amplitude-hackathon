import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import { ModelsContainer } from "@/components/organisms/ModelsContainer";

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      backgroundImage="/background.svg"
      minH="100vh"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Container py={{ base: "4", lg: "5" }}>
        <Box as="nav" pb={{ base: "12", md: "24" }}>
          <Flex>
            <Text ml={2} fontWeight="bold">
              Revenue Analyzer
            </Text>
          </Flex>
          <Divider mt={4} />
        </Box>
        <Box as="section" mt={12} h="full">
          <ModelsContainer />
        </Box>
      </Container>
    </Flex>
  );
};

export default Home;
