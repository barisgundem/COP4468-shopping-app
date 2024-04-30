import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput, Modal, FlatList } from 'react-native';
import { fetchProducts } from '../api/product.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartPlus, faShoppingCart, faUser, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import plus icon
import { styles } from '../styles/ProductListing.styles.js';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

import Logo from '../assets/logo.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CARD_MARGIN_PERCENTAGE = 0.05; // 5% of window width
const CARD_MARGIN = windowWidth * CARD_MARGIN_PERCENTAGE;
const CARD_WIDTH = (windowWidth - CARD_MARGIN * 3) / 2;
const CARD_HEIGHT = windowHeight * 0.25; // 25% of window height
const ITEMS_PER_PAGE = 6;

const ProductListingScreen = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [cartItems, setCartItems] = useState([]); // Cart items now include quantity
  const [showCartModal, setShowCartModal] = useState(false);
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    loadProducts();
  }, []);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    // Decrease the quantity of the product in the cart
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return null; // Remove the item from cart if quantity becomes 0
        }
      }
      return item;
    }).filter(Boolean);

    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const goToProfileScreen = () => {
    navigation.navigate('Profile'); // Navigate to the Profile screen
  };

  const renderProduct = (product) => (
    <View key={product.id} style={[styles.productContainer, { width: CARD_WIDTH, height: CARD_HEIGHT }]}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <View style={styles.titleAndPrice}>
          <Text numberOfLines={1} style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
        </View>
        <TouchableOpacity onPress={() => addToCart(product)}>
          <FontAwesomeIcon icon={faCartPlus} style={styles.addToCartIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderProducts = () => {
    let filteredProducts = products;
  
    if (searchText.trim() !== '') {
      filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
  
    return (
      <View style={styles.productsContainer}>
        {currentProducts.map((product) => renderProduct(product))}
      </View>
    );
  };
  
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const numPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    const buttons = [];

    for (let i = 1; i <= numPages; i++) {
      buttons.push(
        <TouchableOpacity key={i} onPress={() => handlePageChange(i)}>
          <Text style={currentPage === i ? styles.activePageButton : styles.pageButton}>{i}</Text>
        </TouchableOpacity>
      );
    }

    return buttons;
  };

  const renderCartItem = ({ item }) => {
    // Item title truncated to maximum 36 characters
    const truncatedTitle = item.title.length > 36 ? item.title.substring(0, 36) + '...' : item.title;

    return (
      <View style={styles.cartItem}>
        <View style={styles.cartItemText}>
          <Text style={styles.cartItemTitle}>{truncatedTitle}</Text>
          <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
        </View>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
          <FontAwesomeIcon icon={faPlus} style={styles.plusIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Text style={styles.removeCartItem}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCartModal = () => (
    <Modal visible={showCartModal} animationType="slide" transparent={false}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.modalHeaderText}>Cart</Text>
          <TouchableOpacity onPress={() => setShowCartModal(false)}>
            <Text style={styles.closeModal}>Back</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.id.toString()}
        />
        <View style={styles.cartFooter}>
  <Text style={styles.totalPrice}>Total Price: ${calculateTotalPrice().toFixed(2)}</Text>
  <TouchableOpacity style={styles.buyButton}>
    <Text style={styles.buyButtonText}>Buy</Text>
  </TouchableOpacity>
</View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {renderCartModal()}
      <View style={styles.topBar}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={() => setShowCartModal(true)}>
          <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
          {cartItems.length > 0 && <View style={styles.cartBadge}><Text style={styles.cartBadgeText}>{cartItems.length}</Text></View>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={goToProfileScreen}>
          <FontAwesomeIcon icon={faUser} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderProducts()}
      </ScrollView>
      <View style={styles.paginationContainer}>
        {renderPaginationButtons()}
      </View>
    </View>
  );
};

export default ProductListingScreen;
