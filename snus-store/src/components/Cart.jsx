import React from 'react';
import {
  Box, Button, Table, Thead, Tbody, Tr, Th, Td, Text, Image, Input,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Box maxW="1200px" mx="auto" width="100%" px={4} py={10}>
      <Text fontSize="2xl" mb={6}>Корзина</Text>
      {cartItems.length === 0 ? (
        <Text>Ваша корзина пуста</Text>
      ) : (
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Товар</Th>
              <Th>Название</Th>
              <Th>Цена за единицу</Th>
              <Th>Количество</Th>
              <Th>Общая цена</Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Image src={item.thumbnail} alt={item.title} boxSize="100px" objectFit="cover" />
                </Td>
                <Td>{item.title}</Td>
                <Td>{item.price.toFixed(2)} ₽</Td>
                <Td>
                  <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                    -
                  </Button>
                  <Input
                    width="50px"
                    textAlign="center"
                    value={item.quantity}
                    readOnly
                  />
                  <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </Button>
                </Td>
                <Td>{(item.price * item.quantity).toFixed(2)} ₽</Td>
                <Td>
                  <Button colorScheme="red" onClick={() => removeFromCart(index)}>
                    Удалить
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <Text fontSize="xl" mt={4}>Общая сумма: {getTotalPrice()} ₽</Text>
      {cartItems.length > 0 && (
        <Link to="/checkout"><Button colorScheme='purple' mt={4}>Оформить заказ</Button></Link>
      )}
    </Box>
  );
};

export default Cart;