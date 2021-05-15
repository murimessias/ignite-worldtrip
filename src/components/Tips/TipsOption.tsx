import {
  Image,
  Stack,
  Circle,
  Text,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';

interface TipsOptionsProps {
  img: string;
  title: string;
}

export function TipsOption({ img, title }: TipsOptionsProps) {
  const isDesktop = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <>
      {!isDesktop ? (
        <GridItem>
          <Stack direction="row" justify="center" align="center" spacing={2}>
            <Circle size="6px" bg="yellow.500" />
            <Text fontWeight="500">{title}</Text>
          </Stack>
        </GridItem>
      ) : (
        <GridItem>
          <Image src={`/icons/${img}`} h={12} mb={2} mx="auto" />
          <Text fontWeight="500" textAlign="center">
            {title}
          </Text>
        </GridItem>
      )}
    </>
  );
}
