import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom

const HeroBanner = () => {
  return (
    <Box as="section" position="relative" overflow="hidden" height="60vh">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '150%',
          height: '150%',
          objectFit: 'cover',
          transform: 'translate(-50%, -40%)'
        }}
      >
        <source src="https://promminer.ru/upload/mainpage/main_full.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box bg="rgba(0, 0, 0, 0.6)" position="absolute" top="0" left="0" width="100%" height="100%" />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        mx="auto"
        maxW="1200px"
        position="relative"
        zIndex="1"
        px={4}
        py={20}
      >
        <Box flexBasis={{ base: '100%', md: '50%' }} mb={{ base: 10, md: 0 }}>
          <Heading as="h1" size="xl" mb={4} color="white">
            Лучшие цены на оборудование для майнинга в Беларуси
          </Heading>
          <Text fontSize="lg" mb={8} color="white">
            Многолетние контракты с ведущими производителями оборудования для майнинга позволяют нам давать вам лучшие условия. Собственный дата-центр, более 500 000 привезенных устройств, более 100 000 довольных клиентов.
          </Text>
          <Link to="/consultation">
            <Button colorScheme="purple" size="lg">
              Получить консультацию
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroBanner;