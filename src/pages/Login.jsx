import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Flex, Box, Heading } from '@chakra-ui/react';
import { SupabaseAuthUI, useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20} direction="column" justify="center" align="center">
        <Box bg="white" p={6} rounded="md" shadow="md" w="full" maxW="md">
          <Heading mb={6} textAlign="center">Login</Heading>
          <SupabaseAuthUI />
        </Box>
      </Flex>
    </Container>
  );
};

export default Login;