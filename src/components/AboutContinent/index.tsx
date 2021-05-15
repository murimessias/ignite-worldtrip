import {
  Container,
  Flex,
  Box,
  Text,
  Spacer,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AboutContinentProps {
  languages: string;
  countries: string;
  cities: string;
  children: ReactNode;
}

export function AboutContinent({
  children,
  languages,
  countries,
  cities,
}: AboutContinentProps) {
  return (
    <Container py={16} maxW="3xl">
      <Flex
        flexDir={['column', 'row', 'row', 'row']}
        spacing={4}
        align={['flex-start', 'center']}
      >
        <Box maxW={['md', '']}>
          <Text fontSize={['md', 'sm']}>{children}</Text>
        </Box>
        <Spacer my={2} />
        <Stack direction="row" spacing={8} h="100%" align="center">
          <Box textAlign="center">
            <Heading color="yellow.500">{countries}</Heading>
            <Text fontSize="sm" fontWeight="bold">
              países
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading color="yellow.500">{languages}</Heading>
            <Text fontSize="sm" fontWeight="bold">
              línguas
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading color="yellow.500">{cities}</Heading>
            <Text fontSize="sm" fontWeight="bold">
              cidades +100
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
}
