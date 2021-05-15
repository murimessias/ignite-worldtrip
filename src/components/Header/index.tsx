import { Flex, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

import Link from 'next/link';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import { Logo } from './Logo';

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      h={16}
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      {asPath !== '/' && (
        <Link href="/">
          <Icon
            as={RiArrowDropLeftLine}
            fontSize={[20, 40]}
            color="gray.300"
            position="absolute"
            top={['15px', '30px']}
            left="20px"
            cursor="pointer"
          />
        </Link>
      )}
      <Link href="/">
        <Logo cursor="pointer" />
      </Link>
    </Flex>
  );
}
