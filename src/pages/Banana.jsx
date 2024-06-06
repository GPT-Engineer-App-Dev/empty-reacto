import { Container, Box, Image, Flex, Heading } from "@chakra-ui/react";

const Banana = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20} direction="column" justify="center" align="center">
        <Box bg="white" p={6} rounded="md" shadow="md" w="full" maxW="md" textAlign="center">
          <Heading mb={6}>Banana</Heading>
          <Image src="/images/banana.jpg" alt="Banana" borderRadius="md" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Banana;