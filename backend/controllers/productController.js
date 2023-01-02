import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

//@desc Fetch single product
//@route GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('product not found');
	}
});

//@desc Delete product
//@route DELETE /api/products/:id
//@access Admin/Private
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		await product.remove();
		res.json({ message: 'Produkt został usunęty' });
	} else {
		res.status(404);
		throw new Error('Nie znaleziono produktu o podanym id');
	}
});

//@desc Create product
//@route POST /api/products
//@access Admin/Private
const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: 'Sample name',
		price: 0,
		user: req.user._id,
		image: ['/images/sample.jpg'],
		category: 'Sample category',
		countInStock: 0,
		numReviews: 0,
		description: 'Sample description',
	});
	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

//@desc Update product
//@route PUT /api/products/:id
//@access Admin/Private
const updateProduct = asyncHandler(async (req, res) => {
	const { name, price, description, image, category, countInStock } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.name = name;
		product.price = price;
		product.image = image;
		product.category = category;
		product.countInStock = countInStock;
		product.description = description;

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error('Nie znaleziono produktu o podanym id');
	}
});

export {
	getProductById,
	getProducts,
	deleteProduct,
	createProduct,
	updateProduct,
};
