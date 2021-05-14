import { Flex, Image } from '@chakra-ui/react';

interface HeaderProps {
  logo: string;
}

export function Header({ logo }: HeaderProps) {
  return (
    <Flex as="header" justify="center" align="center" h="24">
      <Image src={logo} w={[40, 56]} />
    </Flex>
  );
}
