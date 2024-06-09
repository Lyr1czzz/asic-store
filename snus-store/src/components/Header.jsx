import { Box, Flex, Heading, HStack, Button, useColorMode, IconButton, Badge } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'; // Исправленный импорт
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w="100%" p={4}>
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Link to="/">
          <Heading size="lg">ASIC Store</Heading>
        </Link>
        <HStack spacing={4}>
          <Button as={Link} to="/products" variant="outline">Товары</Button>
          <Button as={Link} to="/about" variant="outline">О нас</Button>
          <Button as={Link} to="/cart" variant="outline">
            Корзина 
            {cartCount > 0 && (
              <Badge ml="1" fontSize="0.8em" colorScheme="purple">
                {cartCount}
              </Badge>
            )}
          </Button>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="outline"
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;