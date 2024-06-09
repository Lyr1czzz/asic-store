import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, useToast } from '@chakra-ui/react';

const Consultation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Запись на консультацию отправлена.",
      description: "Мы свяжемся с вами в ближайшее время.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box maxW="600px" mx="auto" px={4} py={10}>
      <Heading as="h2" size="xl" mb={6}>
        Записаться на консультацию
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Имя</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Сообщение</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="purple" size="lg" width="full">
          Отправить
        </Button>
      </form>
    </Box>
  );
};

export default Consultation;