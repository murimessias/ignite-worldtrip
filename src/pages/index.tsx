import Head from 'next/head';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Tips } from '../components/Tips';
import { Divider } from '../components/Divider';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip | 5 continentes, infinitas possibilidades</title>
      </Head>

      <Header logo="/logo.svg" />

      <main>
        <Banner />
        <Tips />
        <Divider />
        <Slider />
      </main>
    </>
  );
}
