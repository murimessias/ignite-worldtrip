import Link from 'next/link';
import { Flex, Heading, Text } from '@chakra-ui/react';

interface SliderContentProps {
  image: string;
  title: string;
  text: string;
}

export function SliderContent({ image, title, text }: SliderContentProps) {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      h={360}
      textAlign="center"
      color="white"
      bg={`linear-gradient(0deg, rgba(28,20,1,0.35), rgba(28,20,1,0.35)), ${image}`}
      bgSize="cover"
      bgPosition="center"
    >
      <Link href={`/continentes/${title.toLowerCase()}`}>
        <a>
          <Heading>{title}</Heading>
          <Text fontWeight="600" mt="2">
            {text}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
