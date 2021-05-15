import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { CountryCard } from './CountryCard';

export function Cards() {
  return (
    <Container pb={8} maxW="3xl">
      <Heading as="h2" fontSize="2xl">
        Cidades +100
      </Heading>

      <SimpleGrid
        gap={4}
        mt={8}
        templateColumns={['repeat(auto-fill, minmax(140px, 1fr))']}
      >
        <CountryCard
          capital="Londres"
          country="Reino Unido"
          img="https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          flag="united-kingdom.svg"
        />
        <CountryCard
          capital="Paris"
          country="França"
          img="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          flag="france.svg"
        />
        <CountryCard
          capital="Roma"
          country="Itália"
          img="https://images.unsplash.com/photo-1597177724434-245eb4d730e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          flag="italy.svg"
        />
        <CountryCard
          capital="Amsterdã"
          country="Holanda"
          img="https://images.unsplash.com/photo-1594759876531-d12b5e9e2453?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
          flag="netherlands.svg"
        />
        <CountryCard
          capital="Lisboa"
          country="Portugal"
          img="https://images.unsplash.com/photo-1580323956656-26bbb1206e34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=865&q=80"
          flag="portugal.svg"
        />
      </SimpleGrid>
    </Container>
  );
}
