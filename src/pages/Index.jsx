import { Container, Text, VStack, Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20} direction="column">
        <Box as="nav" bg="brand.800" color="white" py={4}>
          <Flex maxW="container.xl" mx="auto" px={4} justify="space-between" align="center">
            <Heading size="md">MyApp</Heading>
            <Flex>
              <Box mx={2}>
                <Link to="/">Home</Link>
              </Box>
              <Box mx={2}>
                <Link to="/about">About</Link>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Flex flex="1" direction="column" justify="center" align="center">
          <VStack spacing={4}>
            <Text fontSize="2xl">Welcome to MyApp</Text>
            <Text>Start building your application by editing this page.</Text>
          </VStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;