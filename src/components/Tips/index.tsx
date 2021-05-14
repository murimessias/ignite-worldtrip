import { Grid } from '@chakra-ui/react';
import { TipsOption } from './TipsOption';

export function Tips() {
  return (
    <Grid
      as="section"
      templateColumns={['repeat(2,.35fr)', 'repeat(5,1fr)']}
      justifyContent="center"
      gap={[2, 4]}
      maxWidth={1200}
      mt={12}
    >
      <TipsOption image="cocktail.svg" title="vida noturna" />
      <TipsOption image="surf.svg" title="praia" />
      <TipsOption image="building.svg" title="moderno" />
      <TipsOption image="museum.svg" title="clássico" />
      <TipsOption image="earth.svg" title="e mais..." />
    </Grid>
  );
}
