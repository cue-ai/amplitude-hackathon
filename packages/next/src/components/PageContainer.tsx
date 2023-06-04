import { type ReactNode } from "react";
import { Box, Container, Text, Divider, Flex } from "@chakra-ui/react";
import { Card } from "@/components/atoms/Card";

export const PageContainer = ({ children }: { children: ReactNode }) => (
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
        <Card>{children}</Card>
      </Box>
    </Container>
  </Flex>
);
