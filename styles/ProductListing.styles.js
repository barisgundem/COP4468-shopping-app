import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  logo: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
  },
  searchBarContainer: {
    flex: 2,
    marginRight: 10,
    marginLeft: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  iconContainer: {
    position: 'relative',
    padding: 10,
  },
  icon: {
    fontSize: 20,
    color: 'black',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    width: '48%', // Adjusted width for better layout
  },
  productImage: {
    width: '100%',
    height: 150, // Adjusted height for better layout
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingHorizontal: 5, // Added padding for better readability
    overflow: 'hidden',
  },
  productPrice: {
    fontSize: 14,
    color: 'orange',
    paddingHorizontal: 5, // Added padding for better readability
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pageButton: {
    marginHorizontal: 5,
    marginBottom: 50,
    fontSize: 16,
    color: 'black',
  },
  activePageButton: {
    marginHorizontal: 5,
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 5, // Added padding for better readability
  },
  titleAndPrice: {
    flex: 1,
  },
  addToCartIcon: {
    marginTop: 20,
    fontSize: 50,
    color: 'green',
  },
  modalContainer: {
    flex: 1,
    marginTop: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeModal: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',

  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10, // Added padding for better layout
    backgroundColor: '#f9f9f9', // Added background color for better contrast
    borderRadius: 10, // Added border radius for rounded corners
  },

  cartItemText: {
    flexDirection: 'column',
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    overflow: 'hidden',
  },
  cartItemQuantity: {
    fontSize: 14,
  },
  removeCartItem: {
    color: 'red',
    fontWeight: 'bold',
  },
  plusIcon: {
    fontSize: 20,
    color: 'green',
    marginRight: 5
    
  },
  cartBadge: {
    position: 'absolute',
    top: 5,
    right: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
  },
  cartBadgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30
  },
  totalPrice: {
    fontSize: 18, // Increase font size
  },
  buyButton: {
    backgroundColor: 'green', // Set background color to green
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    fontSize: 18, // Increase font size
    color: 'white',
  },
  
});
