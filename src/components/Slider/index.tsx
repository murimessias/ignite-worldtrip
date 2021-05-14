import Link from 'next/link';
import { Flex, Heading, Stack, Text, Container } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, A11y]);

import { SliderContent } from './SliderContent';

export function Slider() {
  return (
    <Flex as="section" flexDir="column" w="100%" maxW={1200} mx="auto">
      <Stack spacing="12">
        <Container>
          <Heading
            as="h2"
            fontWeight="500"
            fontSize={['2xl', '3xl']}
            textAlign="center"
          >
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Heading>
        </Container>

        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >
          <SwiperSlide>
            <SliderContent
              title="Europa"
              text="O continente mais antigo"
              image="url(https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
            />
          </SwiperSlide>
        </Swiper>
      </Stack>
    </Flex>
  );
}
