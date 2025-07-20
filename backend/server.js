// ------------------------------
// 🌐 Drift and Sip - Backend Server
// ------------------------------

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cron from 'node-cron';
import os from 'os';

import { archiveOldOrders } from './controllers/orderController.js';
import { setupOrderCleanupJob } from './cronJobs.js'; // ✅ IMPORT CLEANUP JOB
import orderRoutes from './routes/orderRoutes.js';

// ------------------------------
// 🔧 Load Environment Variables
// ------------------------------
dotenv.config();

const app = express();

// ------------------------------
// 🛡️ Middleware
// ------------------------------
app.use(cors());
app.use(express.json());

// ------------------------------
// 🏁 Basic Test Route
// ------------------------------
app.get('/', (req, res) => {
  res.send('🚀 Drift and Sip Backend Running!');
});

// ------------------------------
// 📦 API Routes
// ------------------------------
app.use('/api/orders', orderRoutes);

// ------------------------------
// ⏰ Scheduled Tasks (Cron Jobs)
// ------------------------------
const setupScheduledJobs = () => {
  // ✅ Start cleanup job for soft-delete
  setupOrderCleanupJob();

  // ✅ Daily archiving at midnight
  cron.schedule('0 0 * * *', () => {
    console.log('⏳ Running daily order archiving...');
    archiveOldOrders()
      .then(() => console.log('✅ Order archiving completed'))
      .catch(err => console.error('❌ Archiving failed:', err));
  });

  // ✅ Health ping every 30 mins
  cron.schedule('*/30 * * * *', () => {
    console.log('🔄 Background jobs running normally');
  });
};

// ------------------------------
// 🌍 Utility to get Local IP
// ------------------------------
const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
};

// ------------------------------
// 🌍 Connect to MongoDB & Start Server
// ------------------------------
const PORT = process.env.PORT || 5000;

console.log('🧪 Connecting to MongoDB...');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');

    setupScheduledJobs(); // ✅ Initialize background jobs

    app.listen(PORT, '0.0.0.0', () => {
      const localIP = getLocalIP();
      console.log(`✅ Server running at:`);
      console.log(`   • Localhost:     http://localhost:${PORT}`);
      console.log(`   • Network IP:    http://${localIP}:${PORT}`);
      console.log('⏰ Background jobs initialized');
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });
