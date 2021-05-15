import {
  Flex,
  Stack,
  Box,
  Container,
  Image,
  Heading,
  Text,
  SimpleGrid,
  Spacer,
  AspectRatio,
} from '@chakra-ui/react';
import React from 'react';
import { Header } from '../../components/Header';

export default function Asia() {
  return (
    <>
      <Header logo="/logo.svg" />

      {/* Banner */}
      <Box
        bg={`linear-gradient(0deg, rgba(28,20,1,0.35), rgba(28,20,1,0.35)), url(https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)`}
        bgSize="cover"
        bgPosition="center"
        h={[240, 320]}
      >
        <Container h="100%" maxW="3xl">
          <Flex
            align={['center', 'flex-end']}
            justify={['center', 'flex-start']}
            h="100%"
          >
            <Heading fontSize={['3xl', '2xl']} color="white" mb={[0, 8]}>
              Europa
            </Heading>
          </Flex>
        </Container>
      </Box>

      {/* About */}
      <Container py={16} maxW="3xl">
        <Flex
          flexDir={['column', 'row', 'row', 'row']}
          spacing={4}
          align={['flex-start', 'center']}
        >
          <Box maxW={['md', '']}>
            <Text fontSize={['md', 'sm']}>
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro
              a&nbsp;sudeste
            </Text>
          </Box>
          <Spacer my={2} />
          <Stack direction="row" spacing={8} h="100%" align="center">
            <Box textAlign="center">
              <Heading color="yellow.500">50</Heading>
              <Text fontSize="sm" fontWeight="bold">
                países
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading color="yellow.500">60</Heading>
              <Text fontSize="sm" fontWeight="bold">
                línguas
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading color="yellow.500">27</Heading>
              <Text fontSize="sm" fontWeight="bold">
                cidades +100
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Container>

      {/* Cards */}
      <Container pb={8} maxW="3xl">
        <Heading as="h2" fontSize="2xl">
          Cidades +100
        </Heading>

        <SimpleGrid minChildWidth="140px" gap={4} mt={8}>
          <Box>
            <AspectRatio ratio={4 / 3}>
              <Image
                borderTopRadius={4}
                src="https://bit.ly/naruto-sage"
                alt="naruto"
                objectFit="cover"
              />
            </AspectRatio>

            <Flex
              justify="space-between"
              align="center"
              py={6}
              px={4}
              borderX="1px"
              borderBottom="1px"
              borderColor="yellow.500"
              borderBottomRadius={4}
            >
              <Box>
                <Heading as="h4" fontSize="md">
                  Londres
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  Reino Unido
                </Text>
              </Box>
              <Image src="/earth.svg" w="20px" />
            </Flex>
          </Box>
          <Box>
            <AspectRatio ratio={4 / 3}>
              <Image
                borderTopRadius={4}
                src="https://bit.ly/naruto-sage"
                alt="naruto"
                objectFit="cover"
              />
            </AspectRatio>

            <Flex
              justify="space-between"
              align="center"
              py={6}
              px={4}
              borderX="1px"
              borderBottom="1px"
              borderColor="yellow.500"
              borderBottomRadius={4}
            >
              <Box>
                <Heading as="h4" fontSize="md">
                  Londres
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  Reino Unido
                </Text>
              </Box>
              <Image src="/earth.svg" w="20px" />
            </Flex>
          </Box>
          <Box>
            <AspectRatio ratio={4 / 3}>
              <Image
                borderTopRadius={4}
                src="https://bit.ly/naruto-sage"
                alt="naruto"
                objectFit="cover"
              />
            </AspectRatio>

            <Flex
              justify="space-between"
              align="center"
              py={6}
              px={4}
              borderX="1px"
              borderBottom="1px"
              borderColor="yellow.500"
              borderBottomRadius={4}
            >
              <Box>
                <Heading as="h4" fontSize="md">
                  Londres
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  Reino Unido
                </Text>
              </Box>
              <Image src="/earth.svg" w="20px" />
            </Flex>
          </Box>
          <Box>
            <AspectRatio ratio={4 / 3}>
              <Image
                borderTopRadius={4}
                src="https://bit.ly/naruto-sage"
                alt="naruto"
                objectFit="cover"
              />
            </AspectRatio>

            <Flex
              justify="space-between"
              align="center"
              py={6}
              px={4}
              borderX="1px"
              borderBottom="1px"
              borderColor="yellow.500"
              borderBottomRadius={4}
            >
              <Box>
                <Heading as="h4" fontSize="md">
                  Londres
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  Reino Unido
                </Text>
              </Box>
              <Image src="/earth.svg" w="20px" />
            </Flex>
          </Box>
          <Box>
            <AspectRatio ratio={4 / 3}>
              <Image
                borderTopRadius={4}
                src="https://bit.ly/naruto-sage"
                alt="naruto"
                objectFit="cover"
              />
            </AspectRatio>

            <Flex
              justify="space-between"
              align="center"
              py={6}
              px={4}
              borderX="1px"
              borderBottom="1px"
              borderColor="yellow.500"
              borderBottomRadius={4}
            >
              <Box>
                <Heading as="h4" fontSize="md">
                  Londres
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  Reino Unido
                </Text>
              </Box>
              <Image src="/earth.svg" w="20px" />
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}
