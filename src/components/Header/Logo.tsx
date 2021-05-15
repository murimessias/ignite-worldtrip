import { Image, ImageProps as ChakraImageProps } from '@chakra-ui/react';

interface ImageProps extends ChakraImageProps {}

export function Logo({ ...rest }: ImageProps) {
  return <Image src="/logo.svg" h="100%" w={36} {...rest} />;
}
