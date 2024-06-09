import React, { useState } from 'react';
import { Grid, Box, Image, Text, Button, Select, Input, Flex } from '@chakra-ui/react';

const ProductList = ({ addToCart }) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filterByHashrate, setFilterByHashrate] = useState('');

  const products = [
    {
      id: 1,
      title: "Bitmain Antminer S21 200 TH/s",
      price: 378300,
      hashrate: '200 TH/s',
      algorithm: 'SHA-256',
      thumbnail: "https://promminer.ru/upload/iblock/429/zwacr6j79oxano43w8xkzjgsqe8isvwc/Frame-35199.jpg"
    },
    {
      id: 2,
      title: "Bitmain Antminer L7 9050MH/s",
      price: 552900,
      hashrate: '9050 MH/s',
      algorithm: 'Scrypt',
      thumbnail: "https://promminer.ru/upload/iblock/b65/9j88ujhk4fd7dho8fqd4g2pw2wwd3y3c/anons.jpg"
    },
    {
      id: 3,
      title: "Bitmain Antminer S19K PRO 120 TH/s",
      price: 145500,
      hashrate: '120 TH/s',
      algorithm: 'SHA-256',
      thumbnail: "https://promminer.ru/upload/iblock/d96/l4f2ed0mkqanpfxihpumnjxvx91abdtp/Frame-136.jpg"
    },
    {
      id: 4,
      title: "Bitmain Antminer T21 190 TH/s",
      price: 271600,
      hashrate: '190 TH/s',
      algorithm: 'SHA-256',
      thumbnail: "https://promminer.ru/upload/iblock/581/1wjte80xjk7osxmc1ho0t6jlj7wxljfz/T21_2.jpg"
    },
    {
      id: 5,
      title: "Bitmain Antminer E9 Pro 3680 MH/s",
      price: 417100,
      hashrate: '3680 MH/s',
      algorithm: 'Etchash/Ethash',
      thumbnail: "https://promminer.ru/upload/iblock/2cf/nw7z3mmsx9sgukoek6mll4n5ng6pgspw/Anons.jpg"
    },
    {
      id: 6,
      title: "Whatsminer M50 118 TH/s",
      price: 126100,
      hashrate: '118 TH/s',
      algorithm: 'SHA-256',
      thumbnail: "https://promminer.ru/upload/iblock/d96/l4f2ed0mkqanpfxihpumnjxvx91abdtp/Frame-136.jpg"
    },
    {
      id: 7,
      title: "Bitmain Antminer S19 XP 141 TH/s",
      price: 208550,
      hashrate: '141 TH/s',
      algorithm: 'SHA-256',
      thumbnail: "https://promminer.ru/upload/iblock/a94/18rs6ochxupl8rgkatnj1xgkhnd1ttwp/anons.jpg"
    },
    {
      id: 8,
      title: "Bitmain Antminer S19J PRO 104 TH/s",
      price: 97000,
      hashrate: '104 TH/s',
      algorithm: 'SHA-256',
      thumbnail: "https://promminer.ru/upload/iblock/6c6/tfp859bnw3fp03gg40lr0zths67j22eg/anons_detal.jpg"
    }
  ];

  const handleSort = (products, sortBy) => {
    if (sortBy === 'priceLowToHigh') {
      return products.sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'priceHighToLow') {
      return products.sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'hashrateHighToLow') {
      return products.sort((a, b) => parseFloat(b.hashrate) - parseFloat(a.hashrate));
    }
    return products;
  };

  const filteredProducts = products
    .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    .filter(product => filterByHashrate === '' || product.hashrate.includes(filterByHashrate));

  const sortedFilteredProducts = handleSort(filteredProducts, sortBy);

  return (
    <>
      <Flex mb={4} alignItems="center">
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          mr={2}
        />
        <Input
          placeholder="Filter by Hashrate (e.g., 200 TH/s)"
          value={filterByHashrate}
          onChange={(e) => setFilterByHashrate(e.target.value)}
          mr={2}
        />
        <Select placeholder="Sort by" onChange={(e) => setSortBy(e.target.value)}>
          <option value="priceLowToHigh">Цена: от низ. до выс.</option>
          <option value="priceHighToLow">Цена: от выс. до низ.</option>
          <option value="hashrateHighToLow">Хешрейт: от выс. до низ.</option>
        </Select>
      </Flex>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {sortedFilteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            {product.thumbnail ? (
              <Image src={product.thumbnail} alt={product.title} />
            ) : (
              <Box bg="gray.200" display="flex" justifyContent="center" alignItems="center" height="200px">
                <Text>No Image Available</Text>
              </Box>
            )}
            <Box p="6">
              <Text fontWeight="bold" fontSize="xl">{product.title}</Text>
              <Text mt="2">Цена: {product.price} ₽</Text>
              <Text>Хешрейт: {product.hashrate}</Text>
              <Text>Алгоритм: {product.algorithm}</Text>
              <Button mt="4" colorScheme='purple' onClick={() => addToCart(product)}>
                В корзину
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;