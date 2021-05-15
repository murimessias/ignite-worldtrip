import { Grid } from '@chakra-ui/react';
import { TipsOption } from './TipsOption';

export function Tips() {
  return (
    <Grid
      as="section"
      templateColumns={[
        'repeat(2, 1fr)',
        'repeat(3, minmax(140px, 1fr))',
        'repeat(5, minmax(140px, 1fr))',
      ]}
      gap={[1, 2]}
      maxWidth={1200}
      mt={12}
    >
      <TipsOption img="cocktail.svg" title="vida noturna" />
      <TipsOption img="surf.svg" title="praia" />
      <TipsOption img="building.svg" title="moderno" />
      <TipsOption img="museum.svg" title="clássico" />
      <TipsOption img="earth.svg" title="e mais..." />
    </Grid>
  );
}
