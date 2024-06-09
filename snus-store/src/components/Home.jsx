import React from 'react';
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
  Container,
  VStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import HeroBanner from './HeroBanner';
import { Link } from 'react-router-dom';

const advantages = [
  {
    title: 'Высокое качество',
    description: 'Все наши Asic проходят тщательный контроль качества.',
    imageUrl: 'https://static.tildacdn.com/tild6265-6134-4761-b864-623666363536/photo_2024-05-08_154.jpeg'
  },
  {
    title: 'Лучшие цены',
    description: 'Мы предлагаем конкурентоспособные цены на все наши товары.',
    imageUrl: 'https://static.tildacdn.com/tild3163-6130-4233-b631-386230653663/photo_2024-05-08_153.jpeg'
  },
  {
    title: 'Быстрая доставка',
    description: 'Быстрая и надежная доставка в любую точку мира.',
    imageUrl: 'https://static.tildacdn.com/tild3935-3561-4262-b332-386432353965/photo_2024-05-08_153.jpeg'
  },
];

const Home = () => {
  const bg = useColorModeValue('white', 'gray.700');

  return (
    <>
      <HeroBanner/>
      <Container maxW="container.xl">
        {/* Главный баннер */}
        <Box as="section" textAlign="center" my="6">
          <Heading as="h1" size="2xl" mt="4">Добро пожаловать в магазин Asic</Heading>
          <Text mt="4">Лучшие Asic для майнинга в одном месте.</Text>
          <Button as={Link} to="/products" colorScheme='purple' mt="5" size="lg">К списку товаров</Button>
        </Box>

        {/* Преимущества */}
        <Box as="section" my="10">
          <Heading as="h2" size="lg" textAlign="center" mb="6">Наши преимущества</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
            {advantages.map((advantage, index) => (
              <Box key={index} bg={bg} p="6" boxShadow="xl" borderRadius="lg" textAlign="center">
                <Image src={advantage.imageUrl} boxSize="160px" alt={advantage.title} mx="auto" mb="4" />
                <VStack spacing="4">
                  <Heading as="h3" size="md">{advantage.title}</Heading>
                  <Text>{advantage.description}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default Home;