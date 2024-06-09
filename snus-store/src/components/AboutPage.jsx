import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

const teamMembers = [
  {
    name: 'Алексей Иванов',
    role: 'Основатель',
    imageUrl: 'https://promminer.ru/upload/iblock/405/fhjt6u102zlkikyebomekldz5dqsxwc3/2023_03_21_11_15_25_4_.jpg',
    bio: 'Алексей основал Asic Shop в 2020 году с миссией сделать майнинг доступным для всех.',
  },
  {
    name: 'Мария Смирнова',
    role: 'Маркетолог',
    imageUrl: 'https://promminer.ru/upload/iblock/589/0mjph2uobvthvt6zs58cu77f24dq3rrg/leon.jpg',
    bio: 'Мария отвечает за маркетинговую стратегию и продвижение Asic Shop на рынке.',
  },
  {
    name: 'Иван Петров',
    role: 'Технический директор',
    imageUrl: 'https://promminer.ru/upload/iblock/45c/9btgrju1rjkrhl5fabv89knjbb4r5yld/Untitled.jpg',
    bio: 'Иван имеет более 10 лет опыта в области IT и криптовалют, и является ключевым игроком в разработке наших продуктов.',
  },
];

const AboutPage = () => {
  return (
    <Container maxW="container.xl" py="12">
      <VStack spacing="8" alignItems="flex-start">
        <Heading as="h1" size="2xl">О нас</Heading>
        <Text fontSize="lg">
          Asic Shop - это ведущий поставщик оборудования для майнинга криптовалют. Мы предлагаем
          высококачественные продукты по конкурентоспособным ценам и стремимся предоставить
          лучший сервис нашим клиентам. Наша миссия - сделать майнинг доступным и выгодным для
          каждого.
        </Text>
        <Heading as="h2" size="xl">Наша команда</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
          {teamMembers.map((member, index) => (
            <Box key={index} p="6" boxShadow="md" borderRadius="lg">
              <Image
                borderRadius="full"
                boxSize="150px"
                src={member.imageUrl}
                alt={member.name}
                mb="4"
                mx="auto"
              />
              <VStack spacing="2" alignItems="center">
                <Heading as="h3" size="md">{member.name}</Heading>
                <Text fontWeight="semibold">{member.role}</Text>
                <Text textAlign="center">{member.bio}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default AboutPage;