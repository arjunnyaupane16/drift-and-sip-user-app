import Order from '../models/orderModel.js';

// ✅ Create a new order
export const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({
      error: 'Failed to create order',
      message: err.message,
    });
  }
};

// ✅ Get all active orders (non-deleted, non-archived)
export const getOrders = async (req, res) => {
  try {
    const excludeOrderCardDeleted = req.query.excludeOrderCardDeleted === 'true';
    const filter = {
      isArchived: false,
      deletedFrom: { $ne: 'admin' }
    };
    if (excludeOrderCardDeleted) {
      filter.deletedFrom = { $nin: ['admin', 'orderCard'] };
    }

    const orders = await Order.find(filter).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get orders', message: err.message });
  }
};

// ✅ Get all orders (admin dashboard)
export const getAdminOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get admin orders', message: err.message });
  }
};

// ✅ Update order (status or paymentStatus)
export const updateOrderStatus = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updated)
      return res.status(404).json({ error: 'Order not found' });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update order', message: err.message });
  }
};

// ✅ Soft delete or hard delete based on query
export const deleteOrder = async (req, res) => {
  try {
    const { deletedFrom } = req.body || {};
    const { permanent } = req.query;

    if (permanent === 'true') {
      // 🧨 PERMANENT DELETE
      const deleted = await Order.deleteOne({ _id: req.params.id });
      if (deleted.deletedCount === 0) {
        return res.status(404).json({ error: 'Order not found for deletion' });
      }
      return res.json({ success: true, message: 'Order permanently deleted' });
    }

    // 🧪 SOFT DELETE
    if (deletedFrom === 'orderCard') {
      await Order.findByIdAndUpdate(req.params.id, {
        isDeleted: true,
        scheduledForDeletion: true,
        deletedAt: new Date(),
        deletedFrom: 'orderCard',
      });
    } else {
      await Order.findByIdAndUpdate(req.params.id, {
        status: 'deleted',
        deletedFrom: 'admin',
      });
    }

    res.json({ success: true, message: 'Order soft-deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete order', message: err.message });
  }
};

// ✅ Archive orders older than 24h
export const archiveOldOrders = async () => {
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  try {
    await Order.updateMany(
      {
        createdAt: { $lte: oneDayAgo },
        isArchived: false,
        deletedFrom: { $ne: 'admin' },
      },
      { $set: { isArchived: true } }
    );
    console.log('✅ Old orders archived successfully');
  } catch (err) {
    console.error('❌ Failed to archive old orders:', err.message);
  }
};

// ✅ Restore soft-deleted order
export const restoreOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const restored = await Order.findByIdAndUpdate(
      id,
      {
        deletedFrom: null,
        isDeleted: false,
        scheduledForDeletion: false,
        status: 'pending',
      },
      { new: true }
    );

    if (!restored)
      return res.status(404).json({ message: 'Order not found' });

    res.json({ message: 'Order restored', restoredOrder: restored });
  } catch (err) {
    res.status(500).json({ error: 'Failed to restore order', message: err.message });
  }
};

// ✅ Empty trash: permanently delete all soft-deleted orders
export const emptyTrash = async (req, res) => {
  try {
    const toDelete = await Order.find({
      $or: [{ deletedFrom: 'admin' }, { deletedFrom: 'orderCard' }]
    });

    if (!toDelete.length) {
      return res.json({ message: 'Trash already empty', deletedCount: 0 });
    }

    const result = await Order.deleteMany({
      $or: [{ deletedFrom: 'admin' }, { deletedFrom: 'orderCard' }]
    });

    res.json({
      message: 'Trash emptied successfully',
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to empty trash', message: err.message });
  }
};

// ✅ Get only admin-deleted orders (for Trash screen)
export const getDeletedOrders = async (req, res) => {
  try {
    const deletedOrders = await Order.find({
      deletedFrom: 'admin'
    }).sort({ deletedAt: -1 });

    res.json(deletedOrders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch deleted orders', message: err.message });
  }
};
