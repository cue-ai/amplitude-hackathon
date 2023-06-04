import { Box, Container, Divider, Flex, Heading, Text, Button, Card, CardBody} from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
     <Flex
        direction="column"
        backgroundImage="/background.svg"
        minH="100vh"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
      <Container py={{ base: "4", lg: "5" }} >
          <Box as="nav"  >
              <Text fontWeight="bold">
                AskSEC.ai
              </Text>
      
            <Divider mt={4} />
          </Box>
          <Box as="section">
          </Box>
          <Box as="section" mt={12} h="full">
           
          </Box>

        </Container>
        </Flex>
    </>
  );
};

export default Home;
