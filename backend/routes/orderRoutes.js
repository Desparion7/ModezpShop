import express from 'express';
const router = express.Router();
import {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
	getUserOrdersList,
	getAdminOrdersList,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router
	.route('/')
	.post(protect, addOrderItems)
	.get(protect, admin, getAdminOrdersList);
router.route('/myorders').get(protect, getUserOrdersList);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
