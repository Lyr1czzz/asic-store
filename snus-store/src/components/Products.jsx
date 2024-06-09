import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroBanner from './HeroBanner'; // Убедитесь, что путь корректный
import ProductList from './ProductList'; // Убедитесь, что путь корректный

const Products = ({ addToCart }) => {
  return (
    <>
      <Box maxW="1200px" mx="auto" width="100%" px={4} py={10}>
        <ProductList addToCart={addToCart} />
      </Box>
    </>
  );
};

export default Products;