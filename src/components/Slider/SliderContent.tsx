import Link from 'next/link';
import { Flex, Heading, Text } from '@chakra-ui/react';

interface SliderContentProps {
  image: string;
  title: string;
  text: string;
}

export function SliderContent({ image, title, text }: SliderContentProps) {
  let href = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      h={[240, 360]}
      textAlign="center"
      color="white"
      bg={`linear-gradient(0deg, rgba(28,20,1,0.35), rgba(28,20,1,0.35)), ${image}`}
      bgSize="cover"
      bgPosition="center"
    >
      <Link href={`/continentes/${href}`}>
        <a>
          <Heading as="h2" fontSize={['2xl', '3xl']}>
            {title}
          </Heading>
          <Text fontWeight="400">{text}</Text>
        </a>
      </Link>
    </Flex>
  );
}
