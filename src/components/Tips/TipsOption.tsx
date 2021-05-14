import {
  Flex,
  Image,
  Stack,
  Circle,
  Text,
  useMediaQuery,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';

interface TipsOptionsProps {
  image: string;
  title: string;
}

export function TipsOption({ image, title }: TipsOptionsProps) {
  const [isLargerThan560] = useMediaQuery('(min-width: 560px)');

  return (
    <>
      {isLargerThan560 ? (
        <Flex flexDir="column" justify="space-evenly">
          <Image src={image} h={12} mb={2} />
          <Text fontWeight="500" textAlign="center">
            {title}
          </Text>
        </Flex>
      ) : (
        <GridItem colSpan={1}>
          <Stack direction="row" align="center" spacing={2}>
            <Circle size="6px" bg="yellow.500" />
            <Text fontWeight="500">{title}</Text>
          </Stack>
        </GridItem>
      )}
    </>
  );
}
