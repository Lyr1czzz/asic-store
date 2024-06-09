import React, { useState } from 'react';
import { Box, Text, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, clearCart }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (name && address && phone) {
      // Здесь можно добавить логику отправки данных на сервер
      console.log('Order details:', { name, address, phone, cartItems });
      clearCart();
      toast({
        title: "Заказ размещен.",
        description: "Ваш заказ успешно размещен.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Перенаправление на главную страницу
      navigate('/');
    } else {
      toast({
        title: "Ошибка",
        description: "У вас где то имеются очепятки.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="600px" mx="auto" px={4} py={10}>
      <Text fontSize="2xl" mb={4}>Оформление заказа</Text>
      <FormControl mb={4} isRequired>
        <FormLabel>ФИО</FormLabel>
        <Input type="text" placeholder="Введите ваше ФИО" value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mb={4} isRequired>
        <FormLabel>Адрес</FormLabel>
        <Input type="email" placeholder="Введите ваш адрес" value={address} onChange={(e) => setAddress(e.target.value)} />
      </FormControl>
      <FormControl mb={4} isRequired>
        <FormLabel>Телефон</FormLabel>
        <Input placeholder="Введите ваш телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </FormControl>
      <Button colorScheme='purple' onClick={handlePlaceOrder}>Оформить заказ</Button>
    </Box>
  );
};

export default Checkout;