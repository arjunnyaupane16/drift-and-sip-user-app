import express from 'express';
import {
  createOrder,
  deleteOrder,
  emptyTrash,
  getAdminOrders,
  getDeletedOrders,
  getOrders,
  restoreOrder,
  updateOrderStatus
} from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrders);
router.get('/admin', getAdminOrders);
router.get('/deleted', getDeletedOrders);

router.put('/:id/restore', restoreOrder);
router.delete('/empty-trash', emptyTrash);
router.put('/:id', updateOrderStatus);
router.delete('/:id', deleteOrder);

export default router;
