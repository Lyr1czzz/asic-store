import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import Header from './components/Header';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Home from './components/Home'; // Импортируем компонент Home
import Consultation from './components/Consultation'; // Импортируем компонент Consultation
import { useState, useEffect } from 'react';
import Products from './components/Products';
import AboutPage from './components/AboutPage';

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    // Загрузка данных из localStorage при первом рендере
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Сохранение данных в localStorage при каждом изменении корзины
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
    ));
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Header cartCount={cartItems.length} />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/cart"
            element={
              <Box maxW="1200px" mx="auto" width="100%" px={4} py={10}>
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
              </Box>
            }
          />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
          />
          <Route
            path="/consultation"
            element={<Consultation />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;