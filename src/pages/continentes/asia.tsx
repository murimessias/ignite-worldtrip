import { AboutContinent } from '../../components/AboutContinent';
import { ContinentBanner } from '../../components/Banner/ContinentBanner';
import { Cards } from '../../components/Cards';
import { Header } from '../../components/Header';

export default function Asiaa() {
  return (
    <>
      <Header />

      <ContinentBanner
        img="https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        title="Asia"
      />

      <AboutContinent countries="50" languages="60" cities="27">
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </AboutContinent>

      <Cards />
    </>
  );
}
