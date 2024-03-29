import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

router.get('/all',asyncHandler(async (req,res)=>{
    const products = await Product.find({});
		res.json(products);
}));

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		} else {
			throw new Error('Product not found');
		}
	})
);

 
export default router;