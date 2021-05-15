import { Flex, Heading, Stack, Container } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

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
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <SliderContent
              title="Europa"
              text="O continente mais antigo"
              image="url(https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent
              title="América"
              text="O Novo Mundo"
              image="url(https://images.unsplash.com/photo-1547410828-723fb37ffffd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent
              title="África"
              text="A riqueza da Terra"
              image="url(https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent
              title="Oceania"
              text="O Novíssimo Mundo"
              image="url(https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent
              title="Ásia"
              text="O maior continente"
              image="url(https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80)"
            />
          </SwiperSlide>
        </Swiper>
      </Stack>
    </Flex>
  );
}
