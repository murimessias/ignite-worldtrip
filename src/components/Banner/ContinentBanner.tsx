import { Box, Container, Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
  img: string;
  title: string;
}

export function ContinentBanner({ img, title }: ContinentBannerProps) {
  return (
    <Box
      bg={`linear-gradient(0deg, rgba(28,20,1,0.35), rgba(28,20,1,0.35)), url(${img})`}
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
            {title}
          </Heading>
        </Flex>
      </Container>
    </Box>
  );
}
