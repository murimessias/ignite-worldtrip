import { Box, AspectRatio, Image, Heading, Flex, Text } from '@chakra-ui/react';

interface CountryCardProps {
  img: string;
  capital: string;
  country: string;
  flag: string;
}

export function CountryCard({ img, capital, country, flag }: CountryCardProps) {
  return (
    <Box>
      <AspectRatio ratio={4 / 3}>
        <Image borderTopRadius={4} src={img} objectFit="cover" />
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
          <Heading as="h4" fontSize={['sm', 'md']}>
            {capital}
          </Heading>
          <Text fontSize={['xs', 'sm']} color="gray.500">
            {country}
          </Text>
        </Box>
        <Image src={`/icons/${flag}`} w={[6, 8, 8]} />
      </Flex>
    </Box>
  );
}
