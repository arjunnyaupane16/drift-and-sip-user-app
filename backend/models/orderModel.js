import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    phone: String,
    address: String
  },
  items: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
      size: String,
      image: String
    }
  ],
  orderType: String,          // "delivery" or "dine-in"
  tableNumber: String,        // if dine-in

  specialInstructions: String,
  totalAmount: Number,

  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'confirmed', 'completed', 'deleted']
  },

  deletedFrom: {
    type: String,
    enum: [null, 'orderCard', 'admin'],
    default: null
  },

  isArchived: {
    type: Boolean,
    default: false
  },

  // ✅ ✅ ✅ NEW FIELDS for scheduled deletion
  isDeleted: {
    type: Boolean,
    default: false
  },
  scheduledForDeletion: {
    type: Boolean,
    default: false
  },
  deletedAt: {
    type: Date
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

// ✅ TTL index to auto-delete soft-deleted orders after 24h
orderSchema.index({ deletedAt: 1 }, {
  expireAfterSeconds: 86400, // 24 hours
  partialFilterExpression: {
    isDeleted: true,
    scheduledForDeletion: true
  }
});

export default mongoose.model('Order', orderSchema);
