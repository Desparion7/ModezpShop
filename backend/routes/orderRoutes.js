import express from 'express';
const router = express.Router();
import {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
	getUserOrdersList,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getUserOrdersList);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
