import { getShoppingCart } from '../../utilities/fakedb';

const productsLoader = async () => {
	const cartProducts = await fetch('products.json');
	const products = await cartProducts.json();
	const storedCart = getShoppingCart();
	console.log(storedCart);
	const savedCart = [];
	for (const id in storedCart) {
		const addedProduct = products.find((pd) => pd.id === id);
		const quantity = storedCart[id];
		addedProduct.quantity = quantity;
		savedCart.push(addedProduct);
	}
	// if you need to return two things
	// return [products, savedCart]
	// another options
	// return { products, cart: savedCart };
	return savedCart;
};

export default productsLoader;
