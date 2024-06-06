import { Container, Text, VStack, Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();

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
              <Box mx={2}>
                <Link to="/banana">Banana</Link>
              </Box>
              <Box mx={2}>
                {session ? (
                  <Button onClick={logout} colorScheme="red">Logout</Button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
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