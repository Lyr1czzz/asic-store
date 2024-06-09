import { Box, Image, Text, Button, VStack } from '@chakra-ui/react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      w="100%"
    >
      <Image src={product.image} alt={product.name} />
      <VStack align="start" spacing={2} mt={4}>
        <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
        <Text>{product.description}</Text>
        <Text fontWeight="bold" color="blue.500">${product.price}</Text>
        <Button colorScheme="blue" onClick={() => addToCart(product)}>В корзину</Button>
      </VStack>
    </Box>
  );
}

export default ProductCard;