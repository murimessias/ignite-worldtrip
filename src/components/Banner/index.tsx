import { Box, Flex, Heading, Image, Text, Container } from '@chakra-ui/react';
export function Banner() {
  return (
    <Flex
      as="section"
      align="center"
      justify="center"
      h="80"
      w="100%"
      bgImage="url(background.png)"
      bgSize="cover"
    >
      <Container maxW={['container.sm', 'container.lg']}>
        <Flex
          justify="space-between"
          position="relative"
          w="100%"
          h="100%"
          maxWidth={1200}
        >
          <Box w={['100%', '60%']} alignSelf="center">
            <Heading
              as="h1"
              mb="2"
              fontSize={['2xl', '3xl', '4xl']}
              fontWeight="600"
              color="white"
              lineHeight={1.15}
            >
              5 Continentes,
              <br />
              infinitas possibilidades
            </Heading>
            <Text color="white" fontWeight="400">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou
            </Text>
          </Box>
          <Box position="relative" flex="1" display={['none', 'inline-flex']}>
            <Image src="/airplane.svg" position="absolute" bottom="-8" />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
